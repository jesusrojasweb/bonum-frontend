import { HiOutlineUser, HiAtSymbol, HiLockClosed } from 'react-icons/hi'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import handleChange from '../utils/handlechange'
import useSubmit from '../hooks/useSubmit'

const INITIAL_USER = {
  name: '',
  email: '',
  password: '',
}

function Register() {
  const { handleSubmit, error, registerValues, setRegisterValues } =
    useSubmit(INITIAL_USER)

  return (
    <section className="min-h-screen grid place-content-center bg-gray-100">
      <Form handleSubmit={handleSubmit} error={error} title="Register">
        <Input
          type="text"
          name="name"
          placeholder="Full name"
          Icon={HiOutlineUser}
          value={registerValues.name || ''}
          onChange={e => handleChange(e, registerValues, setRegisterValues)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          Icon={HiAtSymbol}
          value={registerValues.email}
          onChange={e => handleChange(e, registerValues, setRegisterValues)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          Icon={HiLockClosed}
          value={registerValues.password}
          onChange={e => handleChange(e, registerValues, setRegisterValues)}
        />
      </Form>
    </section>
  )
}

export default Register
