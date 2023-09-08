import { projects } from "@/utils/dummyData";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { cardMainStyle, dateStyle, imageStyle, projectNameStyle } from "./styles";
import { IProjectCardProps } from "./types";

const ProjectCard: React.FC<IProjectCardProps> = ({
  project,
  isSelected = false,
  handleClick
}) => {
  return (
    <Card
      onClick={handleClick}
      elevation={0}
      sx={cardMainStyle(isSelected)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={project.avatar}
          sx={imageStyle}
          alt={project.label}
        />
        <CardContent>
          <Typography {...projectNameStyle(isSelected)}>
            {project.label}
          </Typography>
          <Typography {...dateStyle(isSelected)}>
            Created at: {project.createdAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
