import { importMDX } from 'mdx.macro'

import baan from './baan.json'
import covidJson from './covid.json'
import errors from './errors.json'
import footer from './footer.json'
import form from './form.json'
import formComplete from './formComplete.json'
import login from './login.json'
import profile from './profile.json'
import schedule from './schedule.json'
import selectbaan from './selectbaan.json'
import shell from './shell.json'

const covid = {
  ...covidJson,
  content: () => importMDX('./Covid.mdx'),
}

const en = {
  baan,
  errors,
  footer,
  form,
  formComplete,
  login,
  profile,
  schedule,
  shell,
  selectbaan,
  covid,
}

export default en
