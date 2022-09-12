const handleChange = (
  e: any,
  attributes: any,
  setAttributes: React.Dispatch<React.SetStateAction<any>>
) => {
  e.preventDefault()

  setAttributes({
    ...attributes,
    [e.target.name]: e.target.value,
  })
}

export default handleChange
