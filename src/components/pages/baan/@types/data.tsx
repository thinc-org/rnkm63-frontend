export interface IFilterData {
  ID: number
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
