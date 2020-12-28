interface IFacultyName {
  name_en: string
  name_th: string
}
interface IFaculty {
  [key: string]: IFacultyName
}
const faculty: IFaculty = {
  '20': { name_en: 'Graduate School', name_th: 'บัณฑิตวิทยาลัย' },
  '21': { name_en: 'Engineering', name_th: 'วิศวกรรมศาสตร์' },
  '22': { name_en: 'Arts', name_th: 'อักษรศาสตร์' },
  '23': { name_en: 'Science', name_th: 'วิทยาศาสตร์' },
  '24': {
    name_en: 'Political Science',
    name_th: 'รัฐศาสตร์',
  },
  '25': {
    name_en: 'Architecture',
    name_th: 'สถาปัตยกรรมศาสตร์',
  },
  '26': {
    name_en: 'Commerce And Accountancy',
    name_th: 'พาณิชยศาสตร์และการบัญชี',
  },
  '27': { name_en: 'Education', name_th: 'ครุศาสตร์' },
  '28': {
    name_en: 'Communication Arts',
    name_th: 'นิเทศศาสตร์',
  },
  '29': { name_en: 'Economics', name_th: 'เศรษฐศาสตร์' },
  '30': { name_en: 'Medicine', name_th: 'แพทยศาสตร์' },
  '31': {
    name_en: 'Veterinary Science',
    name_th: 'สัตวแพทยศาสตร์',
  },
  '32': { name_en: 'Dentistry', name_th: 'ทันตแพทยศาสตร์' },
  '33': {
    name_en: 'Pharmaceutical Sciences',
    name_th: 'เภสัชศาสตร์',
  },
  '34': { name_en: 'Law', name_th: 'นิติศาสตร์' },
  '35': {
    name_en: 'Fine And Applied Arts',
    name_th: 'ศิลปกรรมศาสตร์',
  },
  '36': { name_en: 'Nursing', name_th: 'พยาบาลศาสตร์' },
  '37': {
    name_en: 'Allied Health Sciences',
    name_th: 'สหเวชศาสตร์',
  },
  '38': { name_en: 'Psychology', name_th: 'จิตวิทยา' },
  '39': {
    name_en: 'Sports Science',
    name_th: 'วิทยาศาสตร์การกีฬา',
  },
  '40': {
    name_en: 'School of Agricultural Resources',
    name_th: 'สำนักวิชาทรัพยากรการเกษตร',
  },
  '51': {
    name_en: 'College of Population Studies',
    name_th: 'วิทยาลัยประชากรศาสตร์',
  },
  '53': {
    name_en: 'College of Public Health Sciences',
    name_th: 'วิทยาลัยวิทยาศาสตร์สาธารณสุข',
  },
  '55': { name_en: 'Language Institute', name_th: 'สถาบันภาษา' },
  '56': {
    name_en: 'School of Integrated Innovation',
    name_th: 'สถาบันนวัตกรรมบูรณาการ',
  },
  '58': {
    name_en: 'Sasin Graduate Institute of Business Administion',
    name_th: 'สถาบันบัณฑิตบริหารธุรกิจ ศศินทร์ฯ',
  },
  '99': { name_en: 'Other University', name_th: 'มหาวิทยาลัยอื่น' },
  '01': {
    name_en: 'The Sirindhorn Thai Language Institute',
    name_th: 'สถาบันภาษาไทยสิรินธร',
  },
  '02': {
    name_en: 'Office of Academic Affairs',
    name_th: 'ศูนย์การศึกษาทั่วไป',
  },
}
export function getFaculty(facultyNo: string): IFacultyName {
  return faculty[facultyNo] === undefined
    ? {
        name_en: '-',
        name_th: '-',
      }
    : faculty[facultyNo]
}

export default getFaculty
