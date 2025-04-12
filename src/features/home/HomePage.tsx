import { Button } from '../../components/ui/button.tsx'
import { useAuthStore } from '../../stores/auth/auth.store.ts'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const clearAuthToken = useAuthStore((state) => state.clearToken)
  const navigate = useNavigate()

  const handleCloseSession = () => {
    clearAuthToken()
    navigate('/auth', { replace: true })
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl">Lograste Acceder!</h1>
        <Button onClick={handleCloseSession}>Cerrar Sesión</Button>
      </div>
    </div>
  )
}

export default HomePage
