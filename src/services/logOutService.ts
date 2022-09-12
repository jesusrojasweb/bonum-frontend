import axios from 'axios'

export const logOutService = async () => {
  await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
    withCredentials: true,
  })
}
