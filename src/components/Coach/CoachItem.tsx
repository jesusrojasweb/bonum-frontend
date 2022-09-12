import { HiTrash, HiPencil } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { useContext, useState } from 'react'
import SliderCoach from '../SliderCoach/SliderCoach'
import deleteCoachService from '../../services/deleteCoachService'
import { AppContext } from '../../context/AppContext'
import SliderForm from '../SliderForm/SliderForm'
import { Coach } from '../../types'
import { CoachesForms } from '../../enums'

function CoachItem(coach: Coach) {
  const { id, name, imageURL, linkedinURL } = coach
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const { token, coaches, setCoaches } = useContext(AppContext)

  const deleteCoach = (e: any) => {
    e.stopPropagation()
    deleteCoachService(id, token)
      .then(response => {
        console.log(response)
        const coachesCopy = coaches
        const coachesNoDeleted = coachesCopy.filter(coach => coach.id !== id)
        setCoaches(coachesNoDeleted)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleClose = (e: any) => {
    // e.stopPropagation()
    setIsInfoOpen(false)
    setIsEditOpen(false)
  }
  return (
    <>
      <article
        className="flex justify-between items-center relative last:border-none px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-100 before:absolute before:h-[2px] before:w-[98%] before:bg-gray-200 before:-bottom-[1px] before:justify-self-center cursor-pointer"
        onClick={() => setIsInfoOpen(true)}
      >
        <div className="flex gap-4 items-center">
          <figure className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden">
            <img src={imageURL} alt={name} className="w-full" />
          </figure>
          <h3>{name}</h3>
        </div>
        <span>
          <a href={linkedinURL} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </span>
        <div className="flex gap-4">
          <button onClick={() => setIsEditOpen(true)}>
            <HiPencil />
          </button>
          <button onClick={deleteCoach}>
            <HiTrash />
          </button>
        </div>
      </article>
      {isInfoOpen && !isEditOpen && (
        <SliderCoach onClose={handleClose} coachId={id} />
      )}
      {isEditOpen && (
        <SliderForm
          onClose={handleClose}
          INITIAL_COACH={coach}
          form={CoachesForms.Edit}
        />
      )}
    </>
  )
}

export default CoachItem
