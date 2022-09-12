import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import getCoachesService from '../services/getCoachesService'

const useGetCoaches = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { coaches, setCoaches } = useContext(AppContext)

  useEffect(() => {
    setIsLoading(true)
    getCoachesService()
      .then(response => {
        setCoaches(response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setCoaches])

  return { coaches, isLoading }
}

export default useGetCoaches
