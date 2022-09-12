import { createPortal } from 'react-dom'
import SliderContent from './SliderContent'

interface Props {
  children: JSX.Element | JSX.Element[]
  onClose: any
}

const $slider = document.getElementById('slider') as Element

function Slider({ children, onClose }: Props) {
  return createPortal(
    <SliderContent onClose={onClose}>{children}</SliderContent>,
    $slider
  )
}

export default Slider
