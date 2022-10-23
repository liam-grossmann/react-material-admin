import { Button, Card, CardActions, CardContent, CardMedia, Divider, Icon, Typography } from "@mui/material"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Indicator = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    {/*}
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      */}
      <CardContent>
        <CardMedia >
        <AttachMoneyIcon></AttachMoneyIcon>
        </CardMedia>
        <Typography variant="body2" color="text.secondary">
         Revenue
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          $ 10,000
        </Typography>
        <Divider></Divider>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
