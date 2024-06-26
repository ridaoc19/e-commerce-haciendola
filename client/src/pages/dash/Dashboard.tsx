import { useContext, useEffect } from 'react';
import NotFound from '../../components/common/NotFound/NotFound';
import { CreateContext, IContextData } from '../../hooks/useContext';
import Account from './account/Account';
import ProductCreation from './Inventory/ProductCreation/ProductCreation';
import AdminUser from './AdminUser/AdminUser';
import BulkCreateProducts from './bulkCreateProducts/BulkCreateProducts';
import useMutationProduct from '../../services/product/useMutationProduct';

function Dashboard() {
  const { dashboard: { stateDashboard: { component } } }: IContextData = useContext(CreateContext)!
  const { tools } = useMutationProduct()

  useEffect(() => {
    return () => {
      tools.removeQuery()
    }
    // eslint-disable-next-line
  }, [])

  switch (component) {
    case "user":
      return <Account />
    case "newDeptCatSubProdData":
      return <ProductCreation />
    case "bulkCreateProducts":
      return <BulkCreateProducts />
    case "adminUser":
      return <AdminUser />
    default:
      return <NotFound text={component} />
  }
}

export default Dashboard;