import Button from "../../../components/common/button/Button"
import useAdminImages from "../../../hooks/useAdminImages/useAdminImages"

function BulkCreateProducts() {
  const { ModalAdminImages, openModal, } = useAdminImages({ entity: 'bulk_create_products', location: 'admin' })

  const content = ["handle", "product", "category", "description", "sku", "grams", "stock", "price", "listPrice", "barcode"]


  return (
    <div className="bulkCreateProducts" style={{display: 'grid', justifyContent: 'center', gap: '1rem'}}>
      {ModalAdminImages}
      <h2>El archivos debe ser Excel y debe contener las siguientes columnas:</h2>
      <ul>
        {content.map(e => (<li key={e}>{e}</li>))}
      </ul>
      <p>Las Columnas que tengan un campo vacio, no se guardarán</p>
      <Button
      svgLeft={{type: 'excel'}}
      button={{
        type: 'light',
        text: 'Agregar archivo de excel',
        handleClick: (e) => {
          e.preventDefault()
          openModal('bulk_create_products', 'excel')
        }
      }
    }
      />
    </div>
  )
}

export default BulkCreateProducts