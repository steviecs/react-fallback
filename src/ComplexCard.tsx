import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";

interface Props {
  isLoading: boolean;
}

export const ComplexCard: React.FC<Props> = ({ isLoading }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={isLoading ? "" : "Lorem ipsum dolor sit amet"}
        subheader={isLoading ? "" : "September 14, 2016"}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          isLoading
            ? ""
            : "https://www.beggarspizza.com/wp-content/uploads/2020/12/thin-crust-pepperoni-slice.png"
        }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {isLoading
            ? ""
            : `Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veni.`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
