import { useContext, useState } from 'react'
import { Coach } from '../../types'
import handleChange from '../../utils/handlechange'
import FormContainer from '../Form/FormContainer'
import Input from '../Form/Input'
import Slider from '../Slider/Slider'
import {
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineLocationMarker,
  HiOutlineMenuAlt2,
} from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import sendCoachService from '../../services/sendCoachService'
import { AppContext } from '../../context/AppContext'

interface Props {
  onClose: any
  INITIAL_COACH: Coach
}

function SliderForm({ onClose, INITIAL_COACH }: Props) {
  const [newCoach, setNewCoach] = useState<Coach>(INITIAL_COACH)
  const { coaches, setCoaches } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useContext(AppContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    sendCoachService(newCoach, token)
      .then(response => {
        if (coaches !== null) {
          onClose()
          setCoaches([...coaches, response.data])
        }
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Slider onClose={onClose}>
      <FormContainer
        title="Create Coach"
        handleSubmit={handleSubmit}
        error=""
        isLoading={isLoading}
      >
        <Input
          type="text"
          name="name"
          placeholder="Coach Name"
          Icon={HiOutlineUser}
          value={newCoach?.name || ''}
          onChange={e => handleChange(e, newCoach, setNewCoach)}
        />
        <Input
          type="url"
          name="imageURL"
          placeholder="Coach Image"
          Icon={HiOutlineUserCircle}
          value={newCoach?.imageURL || ''}
          onChange={e => handleChange(e, newCoach, setNewCoach)}
        />
        <Input
          type="url"
          name="linkedinURL"
          placeholder="Coach Linkedin"
          Icon={FaLinkedin}
          value={newCoach?.linkedinURL || ''}
          onChange={e => handleChange(e, newCoach, setNewCoach)}
        />
        <Input
          type="text"
          name="countrie"
          placeholder="Coach Countrie"
          Icon={HiOutlineLocationMarker}
        />
        <Input
          type="text"
          name="description"
          placeholder="Coach Description"
          Icon={HiOutlineMenuAlt2}
          value={newCoach?.description || ''}
          onChange={e => handleChange(e, newCoach, setNewCoach)}
        />
      </FormContainer>
    </Slider>
  )
}

export default SliderForm
