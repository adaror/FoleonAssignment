import React from "react";
import { ProjectCardType } from "./types";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const ProjectCard: React.FC<ProjectCardType> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imgUrl}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >{`Created At: ${props.creationDate}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
