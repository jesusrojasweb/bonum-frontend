import axios from 'axios'

const getOneCoachService = async (token: string, coachId: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/coaches/${coachId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return data
}

export default getOneCoachService
