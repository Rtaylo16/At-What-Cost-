import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/background23.jpg';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		
  },
  root: {
    flexGrow: 1,
    
  },


}));