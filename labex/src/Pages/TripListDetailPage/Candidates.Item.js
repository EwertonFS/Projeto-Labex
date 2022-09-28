import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const CandidatesItem = () => {
  return (
    <div>
      <List dense={false}>
        <ListItem
          secondaryAction={
              <IconButton>
              <ThumbDownAltIcon />
            </IconButton>
          }
          >
          <ListItemText primary="Candidato 1" />

          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
};

export default CandidatesItem;
