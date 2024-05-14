import React, { useContext } from 'react';
import { CreateContext } from '../../../hooks/useContext';
import { IMessagesReducer } from '../../../hooks/useContext/messages/reducer';
import useMediaQuery from '../../../hooks/useMediaQuery';
import './errorMessage.scss';

const ErrorMessage: React.FC<IMessagesReducer.AppState> = ({ messages }) => {
  const { messages: { messagesContextDispatch } } = useContext(CreateContext)
  const { mediaQuery } = useMediaQuery();

  const closeMessage = (index: number) => {
    const filterMessage = messages.filter((_e, i) => i !== index)
    messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_DELETE, payload: filterMessage })
  };

  return (
    <div className={`messages-general__container ${mediaQuery}`}>
      {messages.map(({ message, status_code }, index) => (
        <div key={index} className={`messages-general__card ${getStatusColor(status_code)}`}>
          <button className="close-button" onClick={() => closeMessage(index)}>X</button>
          <div >
            <div>{message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getStatusColor = (status_code: number): string => {
  if ((status_code >= 100 && status_code <= 199) || status_code === 204) {
    return 'information';
  } else if (status_code >= 200 && status_code <= 299) {
    return 'success';
  } else if (status_code >= 300 && status_code <= 399) {
    return 'warning';
  } else {
    return 'error';
  }
};

export default ErrorMessage;
