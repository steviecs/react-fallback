import * as React from "react";
import { ListItemState } from "./state";
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
        {data.map((d) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={d.itemTitle}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {d.itemSender}
                    </Typography>
                    {d.itemBody}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Card>
  );
};

export default ComplexList;
