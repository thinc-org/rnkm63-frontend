import { Box, Typography, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { Theme } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { getLogo } from 'local/BaanInfo'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useStyles } from '../style/cardDialogStyle'
import { DialogTitle } from './dialogComponent'
import ConfirmSelect from './popupConfirm'

const DialogContent = withStyles((theme) => ({
  root: {
    padding: '0',
    margin: '0 89px',
    color: 'white',
    fontSize: '24px',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 45px',
      fontSize: '18px',
    },
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

// interface IFilterData {
//   ID: number
//   size: string
//   'name-en': string
//   'name-th': string
//   'caption-th': string[]
//   'caption-en': string[]
//   facebook: string
//   instagram: string
//   capacity: number
//   request: number
// }

const MediaCard = ({ value }: any) => {
  const classes = useStyles()
  const { t } = useTranslation('selectbaan')
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'th'

  const [open, setOpen] = React.useState(false)
  const [openConfirm, setOpenConfirm] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpenConfirmDialog = () => {
    setOpenConfirm(true)
  }
  const handleCloseConfirmDialog = () => {
    setOpenConfirm(false)
  }
  console.log(value.color)
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen}>
        <CardContent>
          {/* {console.log(value[`name-${lang}`])} */}
          <Typography className={classes.card_title}>
            {value[`name-${lang}`]}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            className={classes.avatar_picture_card}
            src={getLogo(value.ID)}
          />
          <Typography className={classes.card_text}>
            {t('size')}: {value.size}
            <br></br>
            {t('seat')}:{' '}
            <span style={{ color: value.color }}>{value.capacity}</span>
            <br></br>
            {t('request')}:{' '}
            <span style={{ color: value.color }}>{value.request}</span>
            <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions> */}
      <Button
        className={classes.button_select_card}
        variant="contained"
        // onClick={handleClose}
        onClick={handleOpenConfirmDialog}
        color="primary"
      >
        {t('select')}
      </Button>
      {/* </CardActions> */}

      <ConfirmSelect
        confirmOpen={openConfirm}
        closeDialog={handleCloseConfirmDialog}
        submit={handleCloseConfirmDialog}
      />

      <Dialog
        onClose={handleClose}
        open={open}
        // open={false}
        className={classes.dialog_popup}
        PaperProps={{
          style: {
            backgroundColor: '#383838',
          },
        }}
      >
        <Avatar
          alt="Remy Sharp"
          className={classes.avatar_picture}
          src={getLogo(value.ID)}
        />
        <DialogTitle onClose={handleClose} classes={classes}>
          {value[`name-${lang}`]}
        </DialogTitle>

        <DialogContent>
          <Box className={classes.fbandigicon_item}>
            <InstagramIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              {value.facebook}
            </Typography>
          </Box>
          <Box className={classes.fbandigicon_item}>
            <FacebookIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              {value.instagram}
            </Typography>
          </Box>
          <Typography style={{ marginTop: '10px' }}>
            {value[`caption-${lang}`].map((val: string, idx: number) => {
              return (
                <Typography key={idx} gutterBottom>
                  {val}
                </Typography>
              )
            })}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button_select}
            variant="contained"
            onClick={handleOpenConfirmDialog}
          >
            {t('select')}
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

MediaCard.propTypes = {
  value: PropTypes.object,
}

export default MediaCard

// const styles = (theme:Theme) =>
//     createStyles({
//         root: {
//             margin: "0",
//             padding: "0"
//         },
//         closeButton: {
//             position: 'absolute',
//             right: theme.spacing(1),
//             top: theme.spacing(1),
//             color: theme.palette.grey[500],
//         },
//         title: {
//             display: "block",
//             marginLeft: "auto",
//             marginRight: "auto",
//             fontSize:"28px"
//         },
//     });

// interface DialogTitleProps extends WithStyles<typeof styles> {
//     id?: string;
//     children: React.ReactNode;
//     onClose: () => void;
// }

// const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.title}>
//       <Typography className={classes.title}>{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });
