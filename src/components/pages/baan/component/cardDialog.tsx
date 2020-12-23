import { Box, Typography, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { Theme } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
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

export default function MediaCard() {
  const classes = useStyles()
  const { t } = useTranslation('selectbaan')

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

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen}>
        <CardContent>
          <Typography className={classes.card_title}>โจ๋</Typography>
          <Avatar
            alt="Remy Sharp"
            className={classes.avatar_picture_card}
            src="https://cf.bstatic.com/images/hotel/max1024x768/244/244666333.jpg"
          />
          <Typography className={classes.card_text}>
            {t('size')}:<br></br>
            {t('space')}:<br></br>
            {t('request')}:<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.button_select_card}
          variant="contained"
          // onClick={handleClose}
          onClick={handleOpenConfirmDialog}
          color="primary"
        >
          {t('select')}
        </Button>
      </CardActions>

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
          src="https://cf.bstatic.com/images/hotel/max1024x768/244/244666333.jpg"
        />
        <DialogTitle onClose={handleClose} classes={classes}>
          บ้านโจ๋
        </DialogTitle>

        <DialogContent>
          <Box className={classes.fbandigicon_item}>
            <InstagramIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              baanjochula
            </Typography>
          </Box>
          <Box className={classes.fbandigicon_item}>
            <FacebookIcon style={{ color: 'white' }} />
            <Typography className={classes.fbandigicon_text}>
              Baan Jo+
            </Typography>
          </Box>
          <Typography style={{ marginTop: '10px' }}>
            <Typography gutterBottom>
              ⚠️🌌 ไม่มีแสงแดด ไม่มีดวงดาว
              มีแต่ขอบฟ้าพิษสีเทาที่กว้างสุดลูกหูลูกตา โลกกำลังกลับตาลปัตรไปหมด!
              🌌⚠️
            </Typography>
            <Typography gutterBottom>
              💡ประตูมิติที่ถูกเปิดขึ้นอีกครั้งกลับสรรพสิ่งจากหน้ามือเป็นหลังมือ
              บ้านเมืองเต็มไปด้วยความโกลาหล🎃 ผู้คนกลับกลอก
              ไข้หวัดกลับกลายเป็นโรคระบาดครั้งมหันตภัย🐀🦠
              พลังงานจักรวาลลึกลับซักซ้อนเกินมนุษย์จะเข้าใจคืบคลานในเงามืดหมายเอาทุกอย่างกลับคืน🚨
            </Typography>
            <Typography gutterBottom>
              🔦มีเพียงคุณเท่านั้นที่จะหยุดยั้งและเปลี่ยนแปลงมันได้!🔦
            </Typography>
            <Typography gutterBottom>
              🚲ร่วมผจญภัยและเอาตัวรอดในโลก Upside Down
              เอาชนะพลังเหนือธรรมชาติอันน่าหวาดกลัว
              นี่คือเวลาที่พวกเราต้องรวมตัวกันเพื่อความอยู่รอดและพิสูจน์ว่า
              “มิตรภาพ” มีชัยเหนือทุกความหวาดกลัว เร็ว ๆ นี้ ที่บ้านโจ๋ 🧇❤️
            </Typography>
            <Typography gutterBottom>📻Some door can’t be close</Typography>
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
