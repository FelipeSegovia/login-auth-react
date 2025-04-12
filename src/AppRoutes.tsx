import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import AuthPage from './pages/AuthPage.tsx'
import { PATHS } from './const/paths.ts'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={PATHS.AUTH} element={<AuthPage />} />

        <Route path="*" element={<Navigate to={PATHS.AUTH} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
