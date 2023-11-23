import PropTypes from "prop-types";
import { Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";

const FrontSideCard = ({ image,title, price, artist}) => {
  const cardStyle = {
    width: '100%',
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'column',
};

const cardMediaStyle = {
    pt: "56.25%",
    backgroundImage: `url(${image})`,
};

const isFreeStyle = {
    background: price === "Free" ? "#84CC14" : "#FF4B4B",
    color: "white",
    padding: "5px 10px",
    borderRadius: "4px",
    position: "absolute",
    top: "10px",
    left: "10px",
};

    return (
      <Card sx={cardStyle}>
        <CardActionArea>
            <CardMedia
                component="div"
                sx={cardMediaStyle}
                image={image}
                alt={title}
            />
            <div style={isFreeStyle}>
                {price === "Free" ? "Free" : "Paid"}
            </div>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title || "Event Title"}
                </Typography>
                {artist && (
                    <Typography variant="body2" color="textSecondary" component="p">
                    Artist: {artist}
                    </Typography>
                )}
            </CardContent>
        </CardActionArea>
    </Card>
    )
}

FrontSideCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    initialDate: PropTypes.string,
    finalDate: PropTypes.string,
    urlEvent: PropTypes.string,
    price: PropTypes.string,
    artist:PropTypes.string
};

export default FrontSideCard

