import axios from 'axios'
import { CoachesForms } from '../enums'
import { Coach } from '../types'

const sendCoachService = async (
  coach: Coach,
  token: string,
  form: CoachesForms,
  coachId: string
) => {
  const fetchAxios = form === CoachesForms.Create ? axios.post : axios.patch

  const { data } = await fetchAxios(
    `${process.env.REACT_APP_BASE_URL}/coaches/${coachId}`,
    coach,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  console.log(data)
  return data
}

export default sendCoachService
