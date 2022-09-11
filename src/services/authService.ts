import { User } from '../types'
import axios from 'axios'
import { AuthPages } from '../enums'

const authService = async (user: User, page: AuthPages) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/auth/${page}`,
    user
  )

  return data
}

export default authService
