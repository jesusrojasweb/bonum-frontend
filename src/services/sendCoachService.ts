import axios from 'axios'
import { Coach } from '../types'

const sendCoachService = async (coach: Coach, token: string) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/coaches/`,
    coach,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data
}

export default sendCoachService
