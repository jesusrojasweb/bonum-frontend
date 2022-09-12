import axios from 'axios'

const getCoachesService = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/coaches`)

  return data
}

export default getCoachesService
