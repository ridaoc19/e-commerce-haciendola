import { Link } from 'react-router-dom';
import Svg from '../../../components/assets/icons/Svg';
import Login from '../../../components/common/login/Login';
import Sidebar from '../sidebar/Sidebar';

export type HandleClickDiv = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;

function Navbar() {

  return (
    <div className='navbar'>

      <div className='navbar__sidebar'>
        <Sidebar />
      </div>

      <div className='navbar__logo'>
        <Link to={'/'}>
          {Svg({ type: 'logo' })}
        </Link>
      </div>
      <div className='navbar__login'>
        <Login />
      </div>
    </div>
  );

};
export default Navbar;