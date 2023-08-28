import React from 'react';
import { Navigate } from "react-router-dom";

// Защищенный маршрут, который может увидеть только авторизованный пользователь
const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/" />
  )
}

export default ProtectedRouteElement;
