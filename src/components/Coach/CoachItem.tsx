import { HiTrash, HiPencil } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { useContext, useState } from 'react'
import SliderCoach from '../SliderCoach/SliderCoach'
import deleteCoachService from '../../services/deleteCoachService'
import { AppContext } from '../../context/AppContext'

interface Props {
  name: string
  imageURL: string
  linkdinURL: string
  id: string
}

function CoachItem({ id, name, imageURL, linkdinURL }: Props) {
  const [open, setOpen] = useState(false)
  const { token, coaches, setCoaches } = useContext(AppContext)

  const deleteCoach = () => {
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

  return (
    <>
      <article
        className="flex justify-between items-center relative last:border-none px-4 py-2 rounded-lg hover:bg-blue-100 before:absolute before:h-[2px] before:w-[98%] before:bg-gray-200 before:bottom-0 before:justify-self-center cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex gap-4 items-center">
          <figure className="w-14 rounded-lg overflow-hidden">
            <img src={imageURL} alt={name} className="w-full" />
          </figure>
          <h3>{name}</h3>
        </div>
        <span>
          <a href={linkdinURL} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </span>
        <div className="flex gap-4">
          <button>
            <HiPencil />
          </button>
          <button onClick={deleteCoach}>
            <HiTrash />
          </button>
        </div>
      </article>
      {open && <SliderCoach onClose={() => setOpen(false)} coachId={id} />}
    </>
  )
}

export default CoachItem
