import {
  ButtonBase,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { IRequestError } from 'components/common/Error'
import { getLogo } from 'local/BaanInfo'
import React from 'react'

import { IFilterData } from '../@types/data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      paddingBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '20px',
    },
    image: {
      width: '100px',
      height: '100px',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '50%',
    },
  })
)

interface IGridCard {
  data: IFilterData
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
  disabled: boolean
  handleClickOpen: () => void
  setDialogData: (props: number) => void
}

const GridCard = React.memo(function GridCard(props: IGridCard) {
  const style = useStyles()
  const { data } = props
  const { ID } = data
  const urlLogo = getLogo(ID)
  // const value = getBaan(ID)

  return (
    <div className={style.root}>
      <Paper className={style.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={style.image}>
              <img className={style.img} alt="complex" src={urlLogo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
})

export default GridCard
