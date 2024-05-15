import React, { ReactNode, useEffect, useState } from 'react';
import './message.scss';
import Button from '../button/Button';
import Svg from '../../assets/icons/Svg';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface MessageProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void
}

const Message: React.FC<MessageProps> = ({ children, open, onClose }) => {
  const { mediaQuery } = useMediaQuery()
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('body-scroll-locked');
    }
    setVisible(open)
  }, [open])

  const handleClose = () => {
    document.body.classList.remove('body-scroll-locked');
    onClose && onClose()
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="message-overlay">
          <div className={`message-container ${mediaQuery}`}>
            <div className='message-button'>
              <Button
                button={{
                  type: 'dark',
                  text: Svg({ type: 'close', height: 18, width: 18 }),
                  handleClick: handleClose
                }}
              />
            </div>
            <div className="message-content">
              <p>{children}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
