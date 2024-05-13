import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactNode, useContext, useState } from 'react';
import { IFiles } from '../../interfaces/files.interface';
import { HandleChangeText, HandleClick } from '../../interfaces/global.interface';
import { filesRequest, ErrorFiles } from '../../services/files/filesApi';
import { RequestMapFiles, RouteFiles } from '../../services/files/filesRequest';
import ModalAdminImages from './ModalAdminImages';
import { CreateContext } from '../useContext';
import { IMessagesReducer } from '../useContext/messages/reducer';
export interface UseAdminImagesReturnProps {
  ModalAdminImages: ReactNode;
  selectedFiles: {
    nameComponent: string,
    img: string[]
  };
  typeFile: 'images' | 'videos' | 'excel'
  openModal: (data: string, typeFile: InitialStateAdminFiles['requestData']['toStore']['typeFile']) => void
}

export interface InitialStateAdminFiles {
  requestData: RequestMapFiles[RouteFiles.FilesCreateDelete]['requestData']
  responseData: IFiles.Files[]
  selectedFiles: {
    nameComponent: string,
    img: string[]
  };
}

function useAdminImages({ location, entity }: { location: string, entity: string }): UseAdminImagesReturnProps {
  const queryClient = useQueryClient();
  const { messages: { messagesContextDispatch } } = useContext(CreateContext)
  const initialStateAdminFiles: InitialStateAdminFiles = {
    requestData: {
      toStore: {
        entity,
        file: [],
        location,
        typeFile: 'images',
        name: '',
        selected: false
      },
      toDelete: []
    },
    responseData: [],
    selectedFiles: {
      nameComponent: "",
      img: []
    }
  }
  const [modalOpen, setModalOpen] = useState(false);
  const [stateAdminFiles, setStateAdminFiles] = useState<InitialStateAdminFiles>(initialStateAdminFiles);
  const { requestData, selectedFiles } = stateAdminFiles;


  const { mutate } = useMutation({
    mutationFn: async ({ route, options }: { route: RouteFiles, options: Omit<RequestMapFiles[RouteFiles], 'route' | 'data'> }) => {
      const requestData = await filesRequest(route).options(options);
      return requestData;
    },
    onSuccess({ data, status_code, field, message }, { route }) {
      
      messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: [{ status_code, field, message }] })
      if (field === 'file_create_excel') {
        onClose()
        // queryClient.setQueryData([IFiles.QUERY_KEY_FILES.Excel], data);
      } else {
        if (route === RouteFiles.FilesRequest) {
          queryClient.setQueryData([IFiles.QUERY_KEY_FILES.Files], data);
        } else {
          const inputElement = document.getElementById(`input__images`) as HTMLInputElement | null; //limpia input files
          if (inputElement) inputElement.value = '';
          queryClient.invalidateQueries({ queryKey: [IFiles.QUERY_KEY_FILES.Files] })
        }
      }

      setStateAdminFiles({
        ...stateAdminFiles,
        responseData: data.data,
        requestData: {
          ...stateAdminFiles.requestData,
          toStore: { ...initialStateAdminFiles.requestData.toStore, entity, location, name: requestData.toStore.name, typeFile: requestData.toStore.typeFile }
        }
      })
    },
    onError(error: ErrorFiles) {
      messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: error.errors.map(e => { return { ...e, status_code: error.status_code } }) })
      return error;
    },
  });


  function requestMutation<T extends RouteFiles>({ route, options }: { route: T, options: Omit<RequestMapFiles[T], 'route' | 'data'> }) {
    mutate({ route, options })
  }

  const handleSaveImages: HandleClick = async (event) => {
    event.preventDefault();
    if (requestData.toStore) {

      requestMutation({
        route: RouteFiles.FilesCreateDelete,
        options: {
          requestData,
          extensionRoute: `?entity=${requestData.toStore.entity}&location=${requestData.toStore.location}&selected=${requestData.toStore.selected}&name=${requestData.toStore.name}&typeFile=${requestData.toStore.typeFile}`
        }
      })
    }
  }

  const handleUploadImage: HandleChangeText = (event) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const fileList = Array.from(files) as File[];
      setStateAdminFiles(prevState => ({ ...prevState, requestData: { ...prevState.requestData, toStore: { ...prevState.requestData.toStore, file: [...prevState.requestData.toStore.file, ...fileList] } } }))
    }
  };

  const handleDeleteImage: HandleClick = (event) => {
    event.preventDefault();
    const { value } = event.target as HTMLButtonElement;
    const inputElement = document.getElementById(`input__images`) as HTMLInputElement | null; //limpia input files
    if (inputElement) inputElement.value = '';

    // Crear una nueva copia del array sin el elemento a eliminar
    const updatedImages = [...requestData.toStore.file];
    updatedImages.splice(+value, 1);
    setStateAdminFiles(prevState => ({ ...prevState, requestData: { ...prevState.requestData, toStore: { ...prevState.requestData.toStore, file: updatedImages } } }))
  };

  const handleSelectedFiles = (url: string) => {
    setStateAdminFiles(prevState => {
      // Verificar si la URL ya existe en el array selectedFiles
      const urlExists = prevState.selectedFiles.img.includes(url);

      if (urlExists) {
        // Si la URL ya existe, eliminarla del array
        return {
          ...prevState,
          selectedFiles: { ...prevState.selectedFiles, img: prevState.selectedFiles.img.filter(fileUrl => fileUrl !== url) }
        };
      } else {
        // Si la URL no existe, agregarla al array
        return {
          ...prevState,
          selectedFiles: { ...prevState.selectedFiles, img: [...prevState.selectedFiles.img, url] }
        };
      }
    });
  };

  const openModal = (nameComponent: string, typeFiles: InitialStateAdminFiles['requestData']['toStore']['typeFile']) => {
    setStateAdminFiles(prevState => ({
      ...prevState,
      selectedFiles: { ...prevState.selectedFiles, nameComponent: nameComponent },
      requestData: { ...prevState.requestData, toStore: { ...prevState.requestData.toStore, name: nameComponent, typeFile: typeFiles } }
    }))
    if (requestData.toStore) {
      requestMutation({
        route: RouteFiles.FilesRequest,
        options: {
          extensionRoute: `?entity=${requestData.toStore.entity}&location=${requestData.toStore.location}&selected=${requestData.toStore.selected}&name=${nameComponent}&typeFile=${typeFiles}`
        }
      })
    }
    document.body.classList.add('body-scroll-locked');
    setModalOpen(true);
  };

  const onClose = () => {
    document.body.classList.remove('body-scroll-locked');
    setStateAdminFiles(initialStateAdminFiles)
    setModalOpen(false)
  }

  return {
    ModalAdminImages: modalOpen ? (
      <ModalAdminImages
        setStateAdminFiles={setStateAdminFiles}
        handleDeleteImage={handleDeleteImage}
        handleSaveImages={handleSaveImages}
        handleUploadImage={handleUploadImage}
        handleSelectedFiles={handleSelectedFiles}
        isOpen={modalOpen}
        onClose={onClose}
        setModalOpen={setModalOpen}
        stateAdminFiles={stateAdminFiles}
      />) : null,
    selectedFiles,
    openModal,
    typeFile: requestData.toStore.typeFile
  };
}

export default useAdminImages;