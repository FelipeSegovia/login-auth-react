import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

interface ValidateToken {
  validateToken: boolean
}

async function getValidateToken(token: string) {
  const response: AxiosResponse<ValidateToken> = await axios.get(
    `http://localhost:3000/auth/validate/${token}`
  )

  return response.data
}

export const useValidateToken = (token: string) => {
  return useQuery({
    queryKey: ['validateToken'],
    queryFn: async () => await getValidateToken(token),
    retry: 1,
    enabled: !!token,
  })
}
