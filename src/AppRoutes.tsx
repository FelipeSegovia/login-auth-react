import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { PATHS } from './const/paths.ts'
import { AuthLayout } from './features/auth/layout/AuthLayout.tsx'
import { LoginPage } from './features/auth/pages/LoginPage.tsx'
import { RegisterPage } from './features/auth/pages/RegisterPage.tsx'
import HomePage from './features/home/HomePage.tsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<Navigate to={PATHS.AUTH} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
