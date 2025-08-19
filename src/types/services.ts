export interface Services {
  services: Service[]
}

export interface Service {
  id: string
  name: string
  iconId: string
  description: string
  features: Feature[]
  types: Type[]
  available: boolean
  rate: Rate
  duration?: string
}

export interface Feature {
  text: string
  iconId: string
}

export interface Type {
  text: string
  iconId: string
}

export interface Rate {
  hour: Hour[]
}

export interface Hour {
  timezone: string
  default: boolean
  currency: string
  range: string[]
}
