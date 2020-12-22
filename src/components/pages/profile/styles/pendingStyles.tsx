import { makeStyles, Theme } from '@material-ui/core/styles'

export const pendingStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: 'rgba(255, 255, 255, .15)',
    backdropFilter: 'blur(5px)',
    width: '500px',
    height: '300px',
  },
}))
