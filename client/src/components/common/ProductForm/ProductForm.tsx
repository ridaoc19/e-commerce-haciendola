import { ChangeEvent, useEffect, useState } from 'react';
import { RequestMapProduct, RouteProduct } from '../../../services/product/productRequest';
import useMutationProduct from '../../../services/product/useMutationProduct';
import Button from '../button/Button';
import useAdminImages from '../../../hooks/useAdminImages/useAdminImages';
import { InitialStateProductCreation, UseProductCreationQueryReturn } from '../../../pages/dash/Inventory/ProductCreation/useProductCreationQuery';
import { HandleClick } from '../../../interfaces/global.interface';
import Input from '../Input/Input';
import Spinner from '../spinner';
import useValidations from '../../../hooks/useValidations/useValidations';
import RenderImages from '../../../hooks/useAdminImages/RenderImages';

// function ProductForm<T extends RouteProduct>({ route, options }: { route: T, options: Omit<RequestMapProduct[T], 'route' | 'data'> }) {
function ProductForm<T extends RouteProduct>({ route, options, entity, query }: { query: UseProductCreationQueryReturn['query'], route: T, options: Omit<RequestMapProduct[T], 'route' | 'data'>, entity: InitialStateProductCreation['mutation']['entity'] }) {
  const { executeProductMutation, status } = useMutationProduct();
  const { getValidationErrors } = useValidations();
  const { ModalAdminImages, openModal, selectedFiles, typeFile } = useAdminImages({ entity, location: 'admin' })

  // Estado para almacenar los datos del formulario
  const [requestData, setRequestData] = useState('requestData' in options ? options.requestData : null);


  const [error, setError] = useState<Record<string, string>>({})

  useEffect(() => {
    if ('requestData' in options) {
      setRequestData(options.requestData)
    } else {
      setRequestData(null)
    }
  }, [options])

  useEffect(() => {
    if (selectedFiles.img.length > 0) {
      setRequestData((prevState: any) => {
        const urls = [...new Set([...prevState[typeFile], ...selectedFiles.img])]
        return {
          ...prevState,
          [typeFile]: urls
        };
      });
    }
    // eslint-disable-next-line
  }, [selectedFiles])

  // Función para manejar cambios en los campos de texto
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const { message, stop } = getValidationErrors({ name, value })
    if (stop) return setError(prevState => ({ ...prevState, [name]: message }))
    setRequestData((prevState: any) => ({ ...prevState, [name]: value }));
    setError(prevState => ({ ...prevState, [name]: message }))
  };

  // Función para manejar el envío del formulario
  const handleSubmit: HandleClick = (e) => {
    e.preventDefault();
    // Agregar los campos de objeto al estado de datos del formulario
    if (requestData) {
      executeProductMutation({ route, options: { ...options, requestData } });
    } else {
      executeProductMutation({ route, options });
    }
  };
  console.log(requestData)
  return (
    <form>
      <div className='product-creation__forms'>
        {!!requestData &&
          Object.entries(requestData).map(([name, value], index) => {

            // IMAGENES
            if (name.includes('image') && Array.isArray(value)) {
              return (
                <div key={index} className='product-creation__forms-images'>
                  <h5>{name}</h5>


                  {/* <div key={index} className="advertising-form__input-images"> */}
                    {/* <Button
                      button={{
                        type: 'light',
                        disabled: status.isLoadingProduct,
                        text: status.isLoadingProduct ? <Spinner /> : `Agregar Imágenes a ${entity}`,
                        handleClick: (e) => {
                          e.preventDefault()
                          openModal(entity, 'images')
                        }
                      }}
                    /> */}

                    <RenderImages
                      modal={{
                        openModal,
                        ModalAdminImages,
                        title: entity,
                        type: 'images'
                      }}
                      render={{
                        loading: status.isLoadingProduct,
                        valueImages: value
                      }}
                      handleClickDeleteImage={(indexImage) => {
                        setRequestData((prevData: { [x: string]: any[]; }) => ({
                          ...prevData,
                          [name]: prevData[name].filter((_, index) => index !== indexImage)
                        }));
                      }}
                    />

                    {/* <h5>{name}</h5>
                    <div>
                      <div className='list' style={{ display: 'flex' }}>
                        {value.map((item, i) => {
                          return (
                            <div key={i}>
                              {<img src={item} height={"100%"} alt={``} />}
                              <Button button={{
                                type: 'dark', text: "Eliminar Imagen", handleClick: (e) => {
                                  e.preventDefault()
                                  setRequestData((prevData: { [x: string]: any[]; }) => ({
                                    ...prevData,
                                    [name]: prevData[name].filter((_, index) => index !== i)
                                  }));
                                },
                              }} />
                            </div>
                          )
                        })}
                      </div>
                    </div> */}
                  {/* </div> */}












                </div>

              )

            } else {
              // TEXTO
              return (
                <div key={index} className='product-creation__forms-input'>
                  <h5>{name}</h5>
                  <Input input={{
                    name: name,
                    placeholder: name,
                    disabled: query.isLoading || status.isLoadingProduct,
                    value: value,
                    handleOnChange: handleChange,
                  }}
                    errorMessage={error[name]}
                    styleClass=""
                  />
                </div>
              );
            }
          })}

      </div>

      <Button
        button={{
          type: 'dark',
          disabled: status.isLoadingProduct,
          text: status.isLoadingProduct ? <Spinner /> : 'Guardar',
          handleClick: handleSubmit
        }}
      />
    </form>
  );
}

export default ProductForm;
