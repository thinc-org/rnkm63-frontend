import { makeStyles, Theme } from '@material-ui/core'

const style = makeStyles((theme: Theme) => ({
  scheduleContainer: {
    background: theme.palette.background.default,
    padding: 16,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  scheduleTitle: {
    fontSize: '2rem',
    fontWeight: 500,
    marginBottom: 10,
    textAlign: 'center',
  },
  historyContainer: {
    background: theme.palette.background.default,
    padding: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    borderRadius: 8,
  },
  historyTitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: 20,
    textAlign: 'center',
  },
  historyBann: {
    fontWeight: 700,
    marginLeft: 8,
  },
  historyLine: {
    marginBottom: 20,
  },
  orderBox: {
    marginRight: 10,
  },
  successAction: {
    color: theme.palette.success.main,
    fontWeight: 700,
  },
  failAction: {
    color: theme.palette.error.main,
    fontWeight: 700,
  },
  warningAction: {
    color: theme.palette.warning.main,
    fontWeight: 700,
  },
  noRequest: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  scheduleTable: {
    background: theme.palette.primary.main,
    borderRadius: 25,
  },
}))

export default style
