import axios from 'axios'

const refreshTokenService = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/auth/refresh`,
    {
      withCredentials: true,
    }
  )

  return data
}

export default refreshTokenService
