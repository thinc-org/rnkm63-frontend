import React, { useCallback, useRef, useState } from "react";
import {
  Button,
  Slide,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContentText,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import ReactCrop from "react-image-crop";
import CloseIcon from "@material-ui/icons/Close";
import { imageStyle } from "./style/styles";
import "react-image-crop/dist/ReactCrop.css";

const pixelRatio = 1;
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Picture(props: React.PropsWithRef<any>) {
  const imgRef = useRef();
  const previewCanvasRef = useRef(null);

  const { t, i18n } = useTranslation("form");

  const [upImg, setUpImg] = useState("");
  const [finalImg, setFinalImg] = useState("");

  const [cropState, setCropState] = useState(false);
  const [completedCrop, setCompletedCrop] = useState({} as ReactCrop.Crop);
  const [crop, setCrop] = useState({
    unit: "px",
    width: 150,
    height: 200,
    aspect: 3 / 4,
  } as ReactCrop.Crop);

  const classes = imageStyle();

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result as string));
      reader.readAsDataURL(e.target.files[0]);
      setCropState(true);
    }
  };

  const makePreviewCanvas = () => {
    console.log(completedCrop, previewCanvasRef.current, imgRef.current);
    console.log("Pass");

    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image: any = imgRef.current;
    const canvas: any = previewCanvasRef.current;
    const crop: any = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const imgUrl = canvas.toDataURL("image/jpeg");
    props.setImageUrl(imgUrl);
    setFinalImg(imgUrl);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        margin: 0,
      }}
    >
      <Dialog
        open={cropState}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setCropState(false)}
      >
        <DialogTitle disableTypography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={() => setCropState(false)}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle>
            <Typography>{"Hello World"}</Typography>
          </DialogTitle>
        </DialogTitle>

        <ReactCrop
          src={upImg}
          crop={crop}
          onImageLoaded={onLoad}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          locked
        ></ReactCrop>
        <DialogContentText>{"Hello World"}</DialogContentText>
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={() => {
            makePreviewCanvas();
            setCropState(false);
          }}
        >
          {"ยืนยันรูปภาพ"}
        </Button>
      </Dialog>
      <div>
        <canvas
          ref={previewCanvasRef}
          // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
          style={{
            display: "none",
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0),
          }}
        />
      </div>
      {finalImg ? (
        <div>
          <img src={finalImg} className={classes.image}></img>
        </div>
      ) : (
        <div className={classes.image}></div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          onChange={onSelectFile}
          onClick={(e) => (e.currentTarget.value = "")}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component="span"
          >
            {t("uploadTextButton")}
          </Button>
        </label>
        <p className={classes.reasonText}>{t("uploadReason")}</p>
      </div>
    </div>
  );
}

export default Picture;
