export interface IFilterData {
  ID: number
  size: string
  'name-en': string
  'name-th': string
  'caption-th': string[]
  'caption-en': string[]
  facebook: string
  instagram: string
  capacity: number
  request: number
  color: string
}

export interface ICapacityData {
  baanID: number
  capacity: number
  memberCount: number
  requestCount: number
}

export type IFilterSize = {
  [key: string]: boolean
}
