interface baan {
  ID: number
  'name-th': string
  'name-en': string
}

const baanInfo: baan[] = [
  {
    ID: 0,
    'name-th': '-',
    'name-en': '-',
  },
  {
    ID: 1,
    'name-th': 'บ้านอินดี้',
    'name-en': 'Baan Indy',
  },
  {
    ID: 2,
    'name-th': 'บ้านโจ๋',
    'name-en': 'Baan Jo+',
  },
  {
    ID: 3,
    'name-th': 'บ้านแรง',
    'name-en': 'Baan Rang',
  },
  {
    ID: 4,
    'name-th': 'บ้านยิ้ม',
    'name-en': 'Baan Yim',
  },
  {
    ID: 5,
    'name-th': 'บ้านอะอิ๋ม',
    'name-en': 'Baan AAim',
  },
  {
    ID: 6,
    'name-th': 'บ้านเฟี้ยว',
    'name-en': 'Baan Fyo',
  },
  {
    ID: 7,
    'name-th': 'บ้านโจ๊ะเด๊ะ ฮือซา',
    'name-en': 'Baan Jodeh Huesa',
  },
  {
    ID: 8,
    'name-th': 'บ้านคุ้ม',
    'name-en': 'Baan Koom',
  },
  {
    ID: 9,
    'name-th': 'บ้านพ่อ',
    'name-en': 'Baan Por',
  },
  {
    ID: 10,
    'name-th': 'บ้านสด',
    'name-en': 'Baan Sod',
  },
  {
    ID: 11,
    'name-th': 'บ้านโซ้ยตี๋หลีหมวย',
    'name-en': 'Baan Soeiteelheemouy',
  },
  {
    ID: 12,
    'name-th': 'บ้านบูชายัญ',
    'name-en': 'Baan Buchayun',
  },
  {
    ID: 13,
    'name-th': 'บ้านบึ้ม',
    'name-en': 'Baan Buem',
  },
  {
    ID: 14,
    'name-th': 'บ้านดัง',
    'name-en': 'Baan Dung',
  },
  {
    ID: 15,
    'name-th': 'บ้านคิดส์',
    'name-en': 'Baan Kids',
  },
  {
    ID: 16,
    'name-th': 'บ้านโคะ',
    'name-en': 'Baan Koh',
  },
  {
    ID: 17,
    'name-th': 'บ้านหลายใจ',
    'name-en': 'Baan Laijai',
  },
  {
    ID: 18,
    'name-th': 'บ้านไหน',
    'name-en': 'Baan Nhai',
  },
  {
    ID: 19,
    'name-th': 'บ้านปรี้ยว',
    'name-en': 'Baan Preaw',
  },
  {
    ID: 20,
    'name-th': 'บ้านหวัง',
    'name-en': 'Baan Wang',
  },
  {
    ID: 21,
    'name-th': 'บ้านว้อนท์',
    'name-en': 'Baan Wanted',
  },
  {
    ID: 22,
    'name-th': 'บ้านแอ๊บ',
    'name-en': 'Baan ABNormal',
  },
  {
    ID: 24,
    'name-th': 'บ้านอากาเป้',
    'name-en': 'Baan Agape',
  },
  {
    ID: 27,
    'name-th': 'บ้านอินเดียน่า',
    'name-en': 'Baan Indiana',
  },
  {
    ID: 29,
    'name-th': 'บ้านคุณหนู',
    'name-en': 'Baan Khunnoo',
  },
  {
    ID: 30,
    'name-th': 'บ้านหมีน้อย',
    'name-en': 'Baan Mheenoi',
  },
  {
    ID: 31,
    'name-th': 'บ้านพักตากอากาศ',
    'name-en': 'Baan Pak Tak Agard',
  },
  {
    ID: 32,
    'name-th': 'บ้านผี',
    'name-en': 'Baan Phee',
  },
  {
    ID: 33,
    'name-th': 'บ้านหรอย',
    'name-en': 'Baan Rhoy',
  },
  {
    ID: 34,
    'name-th': 'บ้านเสี่ยว',
    'name-en': 'Baan Seiyw',
  },
  {
    ID: 35,
    'name-th': 'บ้านเต็ม',
    'name-en': 'Baan Tem',
  },
  {
    ID: 36,
    'name-th': 'บ้านเวิร์ค',
    'name-en': 'Baan Work',
  },
]

export function getBaan(baanNumber: number): any {
  return baanInfo.find((item: baan) => {
    return item.ID === baanNumber
  })
}
