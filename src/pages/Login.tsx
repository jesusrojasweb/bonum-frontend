import { AuthPages } from '../enums'
import AuthForm from '../components/Form/AuthForm'

const INITIAL_USER = {
  email: '',
  password: '',
}

function Login() {
  return <AuthForm INITIAL_USER={INITIAL_USER} page={AuthPages.Login} />
}

export default Login
