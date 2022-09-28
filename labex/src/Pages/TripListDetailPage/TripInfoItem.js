import { Typography } from "@mui/material"


const TripInfoItem = (props) => {
    return (
      <>
      <Typography variant={'body1'}><strong>{props.infoName}</strong>:{props.info}</Typography>
      </>
    )
}

export default TripInfoItem