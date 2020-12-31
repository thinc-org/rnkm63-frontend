import { makeStyles, Theme } from '@material-ui/core'

const style = makeStyles((theme: Theme) => ({
  scheduleContainer: {
    background: theme.palette.background.default,
    padding: 16,
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
    marginBottom: 30,
    borderRadius: 8,
  },
  historyTitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: 20,
    textAlign: 'center',
  },
  historyBaan: {
    fontWeight: 700,
    marginLeft: 8,
    fontSize: '0.8rem',
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
    fontSize: '0.8rem',
  },
  failAction: {
    color: theme.palette.error.main,
    fontWeight: 700,
    fontSize: '0.8rem',
  },
  warningAction: {
    color: theme.palette.warning.main,
    fontWeight: 700,
    fontSize: '0.8rem',
  },
  noRequest: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '0.8rem',
  },
  scheduleTable: {
    background: theme.palette.primary.main,
    borderRadius: 25,
  },
  tableText: {
    fontSize: '0.8rem',
    fontWeight: 500,
  },
}))

export default style
