export interface User {
  name?: string
  email: string
  password?: string
  isAdmin?: boolean
}

export interface Coach {
  id: string
  name: string
  imageURL: string
  description: string
  linkedinURL: string
  countrie: Countries
}
