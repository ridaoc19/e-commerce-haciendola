import React from 'react';
import Svg from '../../assets/icons/Svg';
import Button from '../button/Button';
import { Link, useNavigate } from "react-router-dom";

const NotFound: React.FC<{ text?: string }> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <Link to={'/'}>
        {Svg({ type: 'logo' })}
      </Link>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página {!!text && `"${text}"`} que buscas no está disponible.</p>
      <Button
        button={{
          type: 'dark',
          text: 'Página Principal',
          handleClick: () => {
            navigate("/");
          }
        }}
      />
    </div>
  );
};

export default NotFound;
