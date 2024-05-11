import { useEffect } from "react"
import useAdminImages from "../../../hooks/useAdminImages/useAdminImages"

function BulkCreateProducts() {
  const { ModalAdminImages, openModal, selectedFiles, typeFile } = useAdminImages({ entity: 'bulk_create_products', location: 'admin' })


  useEffect(()=>{
    console.log({selectedFiles, typeFile})
  },[selectedFiles, typeFile])



  return (
    <div>
      {ModalAdminImages}
      <button onClick={(e) => {
        e.preventDefault()
        openModal('bulk_create_products', 'excel')
      }}>Agregar Archivo de excel</button>
    </div>
  )
}

export default BulkCreateProducts