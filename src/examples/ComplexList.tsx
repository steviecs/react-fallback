import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Card
} from "@mui/material";
import { ListItemState } from "./state";

interface Props {
  data: ListItemState[];
}

export const ComplexList = ({ data }: Props) => {
  return (
    <Card sx={{ width: 345 }}>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        I'm static, don't skeleton-ize me
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data.map((d, i) => (
          <div key={i}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={d.itemTitle}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {d.itemSender}
                    </Typography>
                    {d.itemBody}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </Card>
  );
};

export default ComplexList;
