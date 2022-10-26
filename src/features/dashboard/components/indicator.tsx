import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import { useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './indicator.css';

export interface IndicatorProps {
  icon: JSX.Element;
  title: string;
  valueText: string;
  isUp: boolean;
  changeText: string;
}

export const Indicator = (props: IndicatorProps) => {

  const [icon, setIcon] = useState(() => props.icon);
  const [title, setTitle] = useState(props.title);
  const [valueText, setValueText] = useState(props.valueText);
  const [isUp, setIsUp] = useState(props.isUp);
  const [changeText, setChangeText] = useState(props.changeText);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <CardMedia>
          <div className="header-container">
            <div className="header-icon">
              <Typography component="div">{icon}</Typography>
            </div>
            <div className="header-title-value">
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="h4">
                {valueText}
              </Typography>
            </div>
          </div>
        </CardMedia>

        <Typography className="xx" variant="subtitle1" color="text.secondary" >
          {isUp ? <ArrowDropUpIcon color='success' fontSize="large" /> : <ArrowDropDownIcon color='error' fontSize="large" />}{changeText}
        </Typography>

        <Divider></Divider>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
