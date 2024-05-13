import Button from "../../components/common/button/Button"
import Spinner from "../../components/common/spinner"
import { UseAdminImagesReturnProps } from "./useAdminImages";
import './renderImages.scss'

export interface RenderImagesProps {
  modal: {
    type: 'images' | 'videos' | 'excel'
    title: string;
    openModal: UseAdminImagesReturnProps['openModal'],
    ModalAdminImages: UseAdminImagesReturnProps['ModalAdminImages']
  }
  render: {
    valueImages: string[];
    loading: boolean;
  }
  handleClickDeleteImage: (indexImage: number) => void
}

function RenderImages({ render, modal, handleClickDeleteImage }: RenderImagesProps) {
  const { loading, valueImages } = render;
  const { openModal, title, type, ModalAdminImages } = modal;
  return (
    <div className="render-images">
      {ModalAdminImages}
      <h5 className="render-images__title">{title}</h5>
      <Button
        button={{
          type: 'dark',
          disabled: loading,
          text: loading ? <Spinner /> : `Agregar ${type === 'images' ? 'imágenes' : type} en ${title}`,
          handleClick: (e) => {
            e.preventDefault()
            openModal(title, type)
          }
        }}
      />
      <div className="render-images__image">
        <div className='list render-images__images' style={{ display: 'flex' }}>
          {valueImages.filter(Boolean)?.map((item, i) => {
            return (
              <div key={i} className="render-images__images-card">
                <img src={item} alt={`${title}-${i}-${type}`} />
                <Button button={{
                  type: 'dark',
                  text: "Eliminar",
                  handleClick: (e) => {
                    e.preventDefault()
                    handleClickDeleteImage(i)
                  }
                }} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RenderImages