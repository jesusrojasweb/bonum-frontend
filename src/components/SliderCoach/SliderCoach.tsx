import Slider from '../Slider/Slider'

import { FaLinkedin } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import getOneCoachService from '../../services/getOneCoachService'
import { AppContext } from '../../context/AppContext'
import Spinner from '../Spinner/Spinner'
import { Coach } from '../../types'

interface Props {
  onClose: any
  coachId: string
}

function SliderCoach({ onClose, coachId }: Props) {
  const { token } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)
  const [coach, setCoach] = useState<Coach | null>(null)

  useEffect(() => {
    getOneCoachService(token, coachId)
      .then(coach => {
        setCoach(coach.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [token, coachId])

  return (
    <Slider onClose={onClose}>
      {isLoading ? (
        <div className="h-full grid place-content-center">
          <Spinner />
        </div>
      ) : (
        <>
          <header className="mb-6 h-40 bg-gray-100 flex px-4 py-4">
            <figure className="w-40 h-40 rounded-lg overflow-hidden bg-white shadow-lg self-end -mb-24">
              <img src={coach?.imageURL} alt="more info" />
            </figure>
          </header>
          <section className="px-6 mt-24">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-4">{coach?.name}</h3>
              <a href={coach?.linkedinURL} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>

            <p>{coach?.description}</p>
          </section>
        </>
      )}
    </Slider>
  )
}

export default SliderCoach
