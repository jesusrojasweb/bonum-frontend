import Spinner from '../Spinner/Spinner'

interface Props {
  handleSubmit: (e: any) => void
  children: JSX.Element | JSX.Element[]
  error: string
  title: string
  isLoading: boolean
}

function FormContainer({
  handleSubmit,
  children,
  error,
  title,
  isLoading,
}: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col shadow-2xl rounded-lg w-96 px-12 py-10 box-content bg-white"
    >
      <h1 className="font-semibold text-lg mb-6 capitalize">{title}</h1>
      {error !== '' && (
        <span className="bg-red-400 text-white w-full py-3 text-center rounded-lg font-semibold mb-6">
          {error}
        </span>
      )}
      {isLoading && <Spinner />}
      {children}
      <button
        type="submit"
        className="bg-blue-500 text-white uppercase rounded-md font-semibold py-2 mt-2"
      >
        Submit
      </button>
    </form>
  )
}

export default FormContainer
