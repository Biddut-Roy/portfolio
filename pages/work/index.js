import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaLocationArrow } from "react-icons/fa";


const Work = () => {
  return <grid>
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent >
       <grid className="items-center">
       <Typography gutterBottom variant="h5"  component="div">
          <Button variant="contained" color="success"> <FaLocationArrow className=" mr-2" /> IMS App</Button>
        </Typography>
        <Typography gutterBottom variant="h5"  component="div">
          <Button variant="contained" color="success"> <FaLocationArrow className=" mr-2" /> IMS App</Button>
        </Typography>
       </grid>
      </CardContent>
      <CardActions>
        <Button size="small">React</Button>
        <Button size="small">Express</Button>
        <Button size="small">Node</Button>
        <Button size="small">Mongoose</Button>
        <Button size="small">Jwt</Button>
        <Button size="small">Tailwind</Button>
        <Button size="small">HTML</Button>
        <Button size="small">CSS</Button>
      </CardActions>
    </Card>
  </grid>
};

export default Work;
