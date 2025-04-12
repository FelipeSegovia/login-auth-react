import axios, { AxiosResponse } from 'axios'

interface RegisterUser {
  accessToken: string
}

export async function getRegisterUser(
  name: string,
  email: string,
  password: string
) {
  const response: AxiosResponse<RegisterUser> = await axios.post(
    `http://localhost:3000/auth/register`,
    {
      name,
      email,
      password,
    }
  )

  return response.data
}
