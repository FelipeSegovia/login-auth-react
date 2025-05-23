import React from 'react'
import { Navigate } from 'react-router'

interface PrivateRouteProps {
  isAuthenticated: boolean
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? children : <Navigate to="/auth" />
}

export default PrivateRoute
