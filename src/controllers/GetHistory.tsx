import { intoFailure } from 'components/ErrorProvider'
import { apiClient } from 'config/axiosInstance'

export type AssignmentLog = {
  fromBaan: number
  preferBaan: number | null
  assignedBaan: number
  round: number
}

async function GetHistory(): Promise<Array<AssignmentLog>> {
  try {
    const res = await apiClient.get<Array<AssignmentLog>>(
      '/assignment/getHistory'
    )
    return res.data
  } catch (e) {
    throw intoFailure(e)
  }
}

export { GetHistory }
