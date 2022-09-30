import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";




const CandidatesItem = (props) => {


  const  approveCandidate = () => {
      props.decideCandidate(true, props.candidate.id)
  }

  const  rejectCandidate = () => {
   props.decideCandidate(false, props.candidate.id)
}


  return (
    <div>
      <List dense={false}>
        <ListItem
          secondaryAction={
              <IconButton>
              <ThumbDownAltIcon onClick ={ rejectCandidate}/>
            </IconButton>
          }
          >
          <ListItemText primary={props.candidate.name} />

          <IconButton>
            <ThumbUpIcon   onClick={approveCandidate}/>
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
};

export default CandidatesItem;
