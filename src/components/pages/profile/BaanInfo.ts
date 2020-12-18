interface Baan {
  ID: number
  'name-th': string
  'name-en': string
}

const baanInfo: Baan[] = [
  {
    ID: 0,
    'name-th': '-',
    'name-en': '-',
  },
  {
    ID: 1,
    'name-th': 'อินดี้',
    'name-en': 'Indy',
  },
  {
    ID: 2,
    'name-th': 'โจ๋',
    'name-en': 'Jo+',
  },
  {
    ID: 3,
    'name-th': 'แรง',
    'name-en': 'Rang',
  },
  {
    ID: 4,
    'name-th': 'ยิ้ม',
    'name-en': 'Yim',
  },
  {
    ID: 5,
    'name-th': 'อะอิ๋ม',
    'name-en': 'AAim',
  },
  {
    ID: 6,
    'name-th': 'เฟี้ยว',
    'name-en': 'Fyo',
  },
  {
    ID: 7,
    'name-th': 'โจ๊ะเด๊ะ ฮือซา',
    'name-en': 'Jodeh Huesa',
  },
  {
    ID: 8,
    'name-th': 'คุ้ม',
    'name-en': 'Koom',
  },
  {
    ID: 9,
    'name-th': 'พ่อ',
    'name-en': 'Por',
  },
  {
    ID: 10,
    'name-th': 'สด',
    'name-en': 'Sod',
  },
  {
    ID: 11,
    'name-th': 'โซ้ยตี๋หลีหมวย',
    'name-en': 'Soeiteelheemouy',
  },
  {
    ID: 12,
    'name-th': 'บูชายัญ',
    'name-en': 'Buchayun',
  },
  {
    ID: 13,
    'name-th': 'บึ้ม',
    'name-en': 'Buem',
  },
  {
    ID: 14,
    'name-th': 'ดัง',
    'name-en': 'Dung',
  },
  {
    ID: 15,
    'name-th': 'คิดส์',
    'name-en': 'Kids',
  },
  {
    ID: 16,
    'name-th': 'โคะ',
    'name-en': 'Koh',
  },
  {
    ID: 17,
    'name-th': 'หลายใจ',
    'name-en': 'Laijai',
  },
  {
    ID: 18,
    'name-th': 'ไหน',
    'name-en': 'Nhai',
  },
  {
    ID: 19,
    'name-th': 'เปรี้ยว',
    'name-en': 'Preaw',
  },
  {
    ID: 20,
    'name-th': 'หวัง',
    'name-en': 'Wang',
  },
  {
    ID: 21,
    'name-th': 'ว้อนท์',
    'name-en': 'Wanted',
  },
  {
    ID: 22,
    'name-th': 'แอ๊บ',
    'name-en': 'ABNormal',
  },
  {
    ID: 24,
    'name-th': 'อากาเป้',
    'name-en': 'Agape',
  },
  {
    ID: 27,
    'name-th': 'อินเดียน่า',
    'name-en': 'Indiana',
  },
  {
    ID: 29,
    'name-th': 'คุณหนู',
    'name-en': 'Khunnoo',
  },
  {
    ID: 30,
    'name-th': 'หมีน้อย',
    'name-en': 'Mheenoi',
  },
  {
    ID: 31,
    'name-th': 'พักตากอากาศ',
    'name-en': 'Pak Tak Agard',
  },
  {
    ID: 32,
    'name-th': 'ผี',
    'name-en': 'Phee',
  },
  {
    ID: 33,
    'name-th': 'หรอย',
    'name-en': 'Rhoy',
  },
  {
    ID: 34,
    'name-th': 'เสี่ยว',
    'name-en': 'Seiyw',
  },
  {
    ID: 35,
    'name-th': 'เต็ม',
    'name-en': 'Tem',
  },
  {
    ID: 36,
    'name-th': 'เวิร์ค',
    'name-en': 'Work',
  },
]

export function getBaan(baanNumber: number): any {
  const sent = baanInfo.find((item: Baan) => {
    return item.ID === baanNumber
  })
  if (sent) {
    return sent
  } else {
    return {
      'name-th': '-',
      'name-en': '-',
    }
  }
}
