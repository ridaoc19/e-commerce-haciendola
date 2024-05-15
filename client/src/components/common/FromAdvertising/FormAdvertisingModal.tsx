import { ReactNode, useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Svg from "../../assets/icons/Svg";
import Button from "../button/Button";
import './formAdvertisingModal.scss'

interface FormAdvertisingModalProps {
  children: ReactNode;
  onClose?: () => void
  title: string;
}

function FormAdvertisingModal({ children, onClose, title }: FormAdvertisingModalProps) {
  const { mediaQuery } = useMediaQuery()
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    document.body.classList.add('body-scroll-locked');
    setVisible(true)
  }

  const handleClose = () => {
    document.body.classList.remove('body-scroll-locked');
    onClose && onClose()
    setVisible(false);
  };

  return (
    <div className="modal-advertising">
      <div className="modal-advertising__button-main">
        <div>
          <Button
            svgLeft={{ type: 'arrowTop' }}
            svgRight={{ type: 'arrowTop' }}
            button={{
              type: 'light',
              text: `Agregar ${title}`,
              handleClick: handleOpen
            }}
          />
        </div>
      </div>
      {visible && <div className="modal-advertising__overlay">
        <div className={`modal-advertising__container ${mediaQuery}`}>
          <div className='modal-advertising__button'>
            <Button
              button={{
                type: 'dark',
                text: Svg({ type: 'close', height: 18, width: 18 }),
                handleClick: handleClose
              }}
            />
          </div>
          <div className="modal-advertising__content">
            <p>{children}</p>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default FormAdvertisingModal