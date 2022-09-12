import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { logOutService } from '../../services/logOutService'
import SliderForm from '../SliderForm/SliderForm'

const INITIAL_COACH = {
  name: '',
  imageURL: '',
  description: '',
  linkedinURL: '',
  countrie: 'eu',
  id: '',
}

function LogOutButton() {
  const { setToken, setUser } = useContext(AppContext)
  const [open, setOpen] = useState(false)

  const logOut = async (e: any) => {
    await logOutService()
    setToken('')
    setUser(null)
  }

  return (
    <>
      <li>
        <Link to="#" onClick={() => setOpen(true)} className="font-semibold">
          Create Coach
        </Link>
      </li>
      <li>
        <Link
          to="#"
          onClick={logOut}
          className="bg-blue-500 text-white uppercase font-bold px-4 py-2 rounded-lg"
        >
          LogOut
        </Link>
      </li>
      {open && (
        <SliderForm
          onClose={() => setOpen(false)}
          INITIAL_COACH={INITIAL_COACH}
        />
      )}
    </>
  )
}

export default LogOutButton
