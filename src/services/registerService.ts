import { User } from '../types'
import axios from 'axios'

const registerService = async (user: User) => {
  const { data } = await axios.post(
    'http://localhost:3001/api/v1/auth/register',
    user
  )

  return data
}

export default registerService
