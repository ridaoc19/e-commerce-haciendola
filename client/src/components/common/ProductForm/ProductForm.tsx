import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import RenderImages from '../../../hooks/useAdminImages/RenderImages';
import useAdminImages from '../../../hooks/useAdminImages/useAdminImages';
import useValidations from '../../../hooks/useValidations/useValidations';
import { HandleClick } from '../../../interfaces/global.interface';
import { initialStateProductCreation, InitialStateProductCreation, UseProductCreationQueryReturn } from '../../../pages/dash/Inventory/ProductCreation/useProductCreationQuery';
import { RequestMapProduct, RouteProduct } from '../../../services/product/productRequest';
import useMutationProduct from '../../../services/product/useMutationProduct';
import Button from '../button/Button';
import Input from '../Input/Input';
import Spinner from '../spinner';

interface ProductFormProps<T extends RouteProduct> {
  query: UseProductCreationQueryReturn['query'],
  route: T, options: Omit<RequestMapProduct[T], 'route' | 'data'>,
  entity: InitialStateProductCreation['mutation']['entity']
  setStateProductCreation: Dispatch<SetStateAction<InitialStateProductCreation>>
}

function ProductForm<T extends RouteProduct>({ route, options, entity, query, setStateProductCreation }: ProductFormProps<T>) {
  const { executeProductMutation, status, tools } = useMutationProduct();
  const { getValidationErrors } = useValidations();
  const { ModalAdminImages, openModal, selectedFiles, typeFile } = useAdminImages({ entity, location: 'admin' })

  const [requestData, setRequestData] = useState('requestData' in options ? options.requestData : null);
  const [error, setError] = useState<Record<string, string>>({})

  useEffect(() => {
    if ('requestData' in options) {
      setRequestData(options.requestData)
    } else {
      setRequestData(null)
    }
    // eslint-disable-next-line
  }, [])

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

  useEffect(() => {
    if (status.isProductSuccess || status.isProductError) {
      tools.removeQuery()
      setStateProductCreation(initialStateProductCreation)
    }
    // eslint-disable-next-line
  }, [status])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const { message, stop } = getValidationErrors({ name, value })
    if (stop) return setError(prevState => ({ ...prevState, [name]: message }))
    setRequestData((prevState: any) => ({ ...prevState, [name]: value }));
    setError(prevState => ({ ...prevState, [name]: message }))
  };

  const handleSubmit: HandleClick = (e) => {
    e.preventDefault();
    if (requestData) {
      executeProductMutation({ route, options: { ...options, requestData } });
    } else {
      executeProductMutation({ route, options });
    }
  };
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
