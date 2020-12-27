export type BaanSize = 'S' | 'M' | 'L' | 'XL'

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

export type IFilterSize = Record<BaanSize, boolean>
