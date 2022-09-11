import { IconType } from 'react-icons'

interface Props {
  Icon: IconType
  type: string
  name: string
  placeholder: string
  value: string
  onChange: (e: any) => void
}

function Input({ Icon, type, name, placeholder, ...params }: Props) {
  return (
    <label className="flex mb-6 gap-2 items-center w-full focus-within:border-blue-500 border-2 border-blue-200 rounded-md pl-2">
      <Icon className="text-xl text-blue-500" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="px-2 py-1 transition duration-300 focus-within:outline-none w-full bg-transparent"
        required
        {...params}
      />
    </label>
  )
}

export default Input
