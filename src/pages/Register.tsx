import AuthForm from '../components/Form/AuthForm'
import { AuthPages } from '../enums'

const INITIAL_USER = {
  name: '',
  email: '',
  password: '',
}

function Register() {
  return <AuthForm INITIAL_USER={INITIAL_USER} page={AuthPages.Register} />
}

export default Register
