import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { PATHS } from './const/paths.ts'
import { AuthLayout } from './features/auth/layout/AuthLayout.tsx'
import { LoginPage } from './features/auth/pages/LoginPage.tsx'
import { RegisterPage } from './features/auth/pages/RegisterPage.tsx'
import HomePage from './features/home/HomePage.tsx'
import { useValidateToken } from './services/useValidateToken.ts'
import PrivateRoute from './features/auth/components/PrivateRoute.tsx'

const AppRoutes = () => {
  const { data: auth, isLoading } = useValidateToken(
    localStorage.getItem('validateToken') || ''
  )
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={!!auth?.validateToken}>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to={PATHS.AUTH} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
