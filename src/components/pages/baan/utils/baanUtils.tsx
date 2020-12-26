import { Baan } from 'local/BaanInfo'

import { ICapacityData, IFilterData, IFilterSize } from '../@types/data'

function searchBaan(
  baanInfo: Baan[],
  filterSize: IFilterSize,
  searchValue: string,
  capacityData: ICapacityData[]
): IFilterData[] {
  const filterData: IFilterData[] = []
  for (const val of baanInfo) {
    const cmpTextEn = val['name-en']
      .toUpperCase()
      .indexOf(searchValue.toUpperCase())
    const cmpTextTh = val['name-th'].indexOf(searchValue)
    if (filterSize[val.size] && (cmpTextEn > -1 || cmpTextTh > -1)) {
      const findCapacity = capacityData.find((p) => {
        return val.ID === p.baanID
      })
      if (typeof findCapacity === 'undefined') continue
      const capacity = findCapacity.capacity - findCapacity.memberCount
      const request = findCapacity.requestCount

      let color = ''
      const mem = request
      const bpOne = 0.8 * capacity
      if (mem > capacity) color = 'red'
      else if (mem <= capacity && bpOne <= mem) color = 'yellow'
      else color = '#44AD53'

      filterData.push({
        ID: val.ID,
        capacity,
        request,
        color,
      })
    }
  }
  return filterData
}

export { searchBaan }
