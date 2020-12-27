import {
  Box,
  ButtonBase,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { getBaan, getLogo } from 'local/BaanInfo'
import React from 'react'
import { useTranslation } from 'react-i18next'

// import useStylesTwo from '../style/cardDialogStyle'
import { IFilterData } from '../@types/data'
import SubmitButton from './SubmitButton'

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
      padding: theme.spacing(1),
      margin: 'auto',
      width: '500',
      height: '150px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '20px',
    },
    image: {
      width: 100,
      height: 100,
    },
    img: {
      margin: 'auto',
      display: 'block',
      width: '85px',
      height: '85px',
      borderRadius: '50%',
      [theme.breakpoints.down(325)]: {
        width: '70px',
        height: '70px',
      },
    },
    spanStyle: {
      // color: data.color ,
      fontSize: '18px',
      fontWeight: 'bold',
      alignText: 'center',
    },
  })
)

interface IGridCard {
  data: IFilterData
  disabled: boolean
  handleClickOpen: () => void
  setDialogData: (props: number) => void
}

const GridCard = React.memo(function GridCard(props: IGridCard) {
  const classes = useStyles()
  const { disabled, setDialogData, handleClickOpen, data } = props
  const value = getBaan(data.ID)
  const urlLogo = getLogo(data.ID)
  const { t, i18n } = useTranslation('selectbaan')
  const lang = i18n.language.startsWith('en') ? 'en' : 'th'
  const color = disabled ? '#A9A9A9' : 'white'

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        onClick={() => {
          handleClickOpen()
          setDialogData(data.ID)
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4} container>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={urlLogo} />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="column"
            style={{
              padding: '10px',
              paddingRight: '0px',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontSize: '24px', fontWeight: 'bold' }}
            >
              <span>{value[`name-${lang}` as 'name-en' | 'name-th']}</span>
            </Typography>
            <Grid item container xs direction="row" style={{ color: 'white' }}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {t('size')}
                </Typography>
                <Typography variant="body2" className={classes.spanStyle}>
                  {value.size}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {t('seat')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span
                    className={classes.spanStyle}
                    style={{ color: data.color }}
                  >
                    {data.capacity}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {t('request')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span
                    className={classes.spanStyle}
                    style={{ color: data.color }}
                  >
                    {data.request}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box style={{ paddingTop: '5px', alignItems: 'right' }}>
          <SubmitButton color={color} disabled={disabled} ID={data.ID} />
        </Box>
      </Paper>
    </div>
  )
})

export default GridCard
