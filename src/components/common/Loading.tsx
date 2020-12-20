import React from 'react'

import { Box, makeStyles, Theme } from '@material-ui/core'

const STROKE_DASH_END = 800

const useStyles = makeStyles((theme: Theme) => ({
  loadingSvg: {
    height: '15vh',
    width: '45vh',
  },
  loadingContainer: {
    position: 'absolute',
    zIndex: 10,
    pointerEvents: 'none',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateZ(0)',
  },
  '@keyframes loading-animation': {
    '0%': {
      strokeDashoffset: 0,
    },
    '90%': {
      strokeDashoffset: STROKE_DASH_END,
    },
    '100%': {
      strokeDashoffset: STROKE_DASH_END,
    },
  },
  pathAnim: {
    strokeDasharray: STROKE_DASH_END,
    stroke: theme.palette.common.white,
    strokeWidth: 2,
    fill: 'none',
    animation:
      '1.5s linear 0s infinite alternate both running $loading-animation',
  },
}))

function Loading() {
  const classes = useStyles()
  return (
    <Box className={classes.loadingContainer}>
      <svg
        version="1.1"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.loadingSvg}
      >
        <path
          id="SVGID_4_"
          d="m275.95 9.8378c-6.8095-2.2628-41.331-9.2797-75.115-8.8303-34.762 0.45728-53.739 3.2325-63.776 8.7909-5.4702 3.0354-5.9292 6.9775-4.7102 10.1 2.2874 5.8658 10.67 13.19 10.67 13.19s-28.811 1.4113-53.159 2.6727c-16.486 0.85149-28.457 2.0814-46.696 5.4086-19.721 3.5952-38.811 12.583-41.685 22.099-2.8818 9.5162 7.5319 15.201 11.076 17.637 3.544 2.4362 13.386 6.7568 25.139 9.9183 12.039 3.2404 46.365 8.373 89.209 8.1838 17.788-0.07881 39.661-1.5768 60.473-7.6556 21.181-6.1891 27.72-15.887 28.743-20.657 0.88787-4.155 0.2182-8.4755-5.6508-15.902s-17.946-14.042-17.946-14.042 26.915-0.81207 46.628-2.2312c19.714-1.4192 34.507-3.6188 45.409-6.3625 10.873-2.7358 14.59-5.9999 14.454-9.398-0.21068-5.2115-16.253-10.659-23.062-12.922zm-104.44 60.101c-3.243 4.699-17.69 9.9183-37.381 12.276-19.684 2.3495-53.077-0.52035-65.785-3.6583-12.709-3.13-26.666-8.8776-27.659-14.625-0.9932-5.7476 8.2241-10.967 19.684-14.05 11.46-3.0827 39.127-5.7949 57.313-6.5833 18.194-0.78054 38.622-1.3088 38.622-1.3088s6.2302 4.699 12.46 10.707c6.2377 6.0156 5.9894 12.544 2.7464 17.243zm90.458-46.943c-5.6508 2.7831-24.258 5.921-35.221 6.2679-10.963 0.3469-50.007 2.0341-50.007 2.0341s-8.969-6.7883-10.466-8.8776c-1.4973-2.0893-5.1015-8.0261-0.55679-10.557 4.3491-2.4204 15.282-4.4073 30.571-4.5255 15.282-0.11826 49.111 2.5072 57.591 5.6845 6.1474 2.2943 13.739 7.1904 8.0887 9.9735z"
          className={classes.pathAnim}
        />
      </svg>
      <h3>Loading</h3>
    </Box>
  )
}

export default Loading
