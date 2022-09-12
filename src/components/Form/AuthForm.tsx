import { useMemo } from 'react'
import { HiOutlineUser, HiAtSymbol, HiLockClosed } from 'react-icons/hi'
import { AuthPages } from '../../enums'
import useSubmit from '../../hooks/useSubmit'
import { User } from '../../types'
import handleChange from '../../utils/handlechange'
import FormContainer from './FormContainer'
import Input from './Input'

interface Props {
  INITIAL_USER: User
  page: AuthPages
}

function AuthForm({ INITIAL_USER, page }: Props) {
  const { handleSubmit, error, authValues, setAuthValues, isLoading } =
    useSubmit(INITIAL_USER, page)
  const isRegister = useMemo(() => page === AuthPages.Register, [page])

  return (
    <section className="min-h-screen grid place-content-center bg-gray-100">
      <div className="shadow-2xl rounded-lg w-96 overflow-hidden">
        <FormContainer
          handleSubmit={handleSubmit}
          error={error}
          title={page}
          isLoading={isLoading}
        >
          <>
            {isRegister && (
              <Input
                type="text"
                name="name"
                placeholder="Full name"
                Icon={HiOutlineUser}
                value={authValues.name || ''}
                onChange={e => handleChange(e, authValues, setAuthValues)}
              />
            )}
          </>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            Icon={HiAtSymbol}
            value={authValues.email}
            onChange={e => handleChange(e, authValues, setAuthValues)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            Icon={HiLockClosed}
            value={authValues.password || ''}
            onChange={e => handleChange(e, authValues, setAuthValues)}
          />
        </FormContainer>
      </div>
    </section>
  )
}

export default AuthForm
