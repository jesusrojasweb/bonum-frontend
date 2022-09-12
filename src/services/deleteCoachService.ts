import axios from 'axios'

const deleteCoachService = async (coachId: string, token: string) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}/coaches/${coachId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return data
}

export default deleteCoachService
