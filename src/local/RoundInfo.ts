interface Round {
  round: number
  date: string
  startTime: string
  endTime: string
}

const roundInfo: Round[] = [
  {
    round: 1,
    date: '2021-01-09',
    startTime: '12:00:00',
    endTime: '18:00:00',
  },
  {
    round: 2,
    date: '2021-01-09',
    startTime: '18:15:00',
    endTime: '24:00:00',
  },
  {
    round: 3,
    date: '2021-01-10',
    startTime: '0:15:00',
    endTime: '6:00:00',
  },
  {
    round: 4,
    date: '2021-01-10',
    startTime: '6:15:00',
    endTime: '12:00:00',
  },
  {
    round: 5,
    date: '2021-01-10',
    startTime: '12:15:00',
    endTime: '18:00:00',
  },
  {
    round: 6,
    date: '2021-01-10',
    startTime: '18:15:00',
    endTime: '24:00:00',
  },
  {
    round: 7,
    date: '2021-01-11',
    startTime: '0:15:00',
    endTime: '6:00:00',
  },
  {
    round: 8,
    date: '2021-01-11',
    startTime: '6:15:00',
    endTime: '12:00:00',
  },
  {
    round: 9,
    date: '2021-01-11',
    startTime: '12:15:00',
    endTime: '18:00:00',
  },
  {
    round: 10,
    date: '2021-01-11',
    startTime: '18:15:00',
    endTime: '24:00:00',
  },
  {
    round: 11,
    date: '2021-01-12',
    startTime: '0:15:00',
    endTime: '6:00:00',
  },
  {
    round: 12,
    date: '2021-01-12',
    startTime: '6:15:00',
    endTime: '12:00:00',
  },
  {
    round: 13,
    date: '2021-01-12',
    startTime: '12:15:00',
    endTime: '18:00:00',
  },
  {
    round: 14,
    date: '2021-01-12',
    startTime: '18:15:00',
    endTime: '24:00:00',
  },
  {
    round: 15,
    date: '2021-01-13',
    startTime: '0:15:00',
    endTime: '6:00:00',
  },
  {
    round: 16,
    date: '2021-01-13',
    startTime: '6:15:00',
    endTime: '12:00:00',
  },
]
export function getEndTime(numRound: number): string {
  const sent = roundInfo.find((item: Round) => {
    return item.round === numRound
  })
  if (sent) {
    return `${sent.date}T${sent.endTime}+07:00`
  } else {
    return '2021-01-12T12:00:00+07:00'
  }
}

export function getStartTime(numRound: number): string {
  const sent = roundInfo.find((item: Round) => {
    return item.round === numRound
  })
  if (sent) {
    return `${sent.date}T${sent.startTime}+07:00`
  } else {
    return '2021-01-12T12:00:00+07:00'
  }
}
