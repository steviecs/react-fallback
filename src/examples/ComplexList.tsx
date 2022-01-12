import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ListItemState } from "./state";
import { Card } from "@mui/material";

interface Props {
  data: ListItemState[];
}

export const ComplexList: React.FC<Props> = ({ data }) => {
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
