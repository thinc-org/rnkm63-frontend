import React from 'react'
import { Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { DialogTitle } from './dialogComponent'
import { useStyles } from '../style/cardDialogStyle'

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

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
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
            ขนาด:<br></br>
            ที่ว่าง:<br></br>
            คำขอ:<br></br>
          </Typography>
          <Button
            className={classes.button_select_card}
            variant="contained"
            onClick={handleClose}
            color="primary"
          >
            เลือก
          </Button>
        </CardContent>
      </CardActionArea>

      <Dialog
        onClose={handleClose}
        open={open}
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
        {/* <ThemeProvider theme={theme}> */}
        <DialogActions>
          <Button
            className={classes.button_select}
            variant="contained"
            onClick={handleClose}
          >
            เลือก
          </Button>
        </DialogActions>
        {/* </ThemeProvider> */}
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
