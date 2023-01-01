<link href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
import Icon from '@material-ui/core/Icon';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const emojis = [

  { label: "Bad", icon: "SentimentVeryDissatisfiedIcon" },
  { label: "Dissatisfied",  icon: "SentimentDissatisfiedIcon" },
  { label: "Neutral",  icon: "SentimentSatisfiedIcon"},
  { label: "Satisfied",  icon: "SentimentSatisfiedAltIcon"},
  { label: "Happy",  icon: "SentimentVerySatisfiedIcon"},

  ];

const icons = {
    SentimentVeryDissatisfiedIcon, 
    SentimentDissatisfiedIcon, 
    SentimentSatisfiedIcon, 
    SentimentSatisfiedAltIcon,
    SentimentVerySatisfiedIcon
};

export default emojis;