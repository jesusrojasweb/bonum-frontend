import { HiOutlineX } from 'react-icons/hi'

interface Props {
  children: JSX.Element | JSX.Element[]
  onClose: any
}

function SliderContent({ children, onClose }: Props) {
  return (
    <aside className="fixed h-screen w-96 right-0 top-0 bg-white shadow-2xl transition duration-300">
      <button
        className="self-start text-xl absolute top-4 right-4"
        onClick={onClose}
      >
        <HiOutlineX />
      </button>
      {children}
    </aside>
  )
}

export default SliderContent
