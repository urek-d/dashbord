import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { WidthNormal } from '@mui/icons-material';


export const useStyles = makeStyles((theme) => ({
  
  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#F4F6F7",
   
  },

  div1:{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },

  title: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "24px",
    color: "black",
    marginBottom: "16px",
  },
  subtitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: "gray",
    textShadow: "1px 1px 2px #ccc",
    marginBottom: "16px",
  },
  search: {
    flexGrow: 1,
    display: 'flex', 
    position: 'relative',
    borderRadius: 50,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  notificationButton: {
    color: 'FFFFFF',
  },
  rectangle: {
    width: '95%',
    height: 300,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2), 
    marginBottom:theme.spacing(2),
    borderRadius: 20,
    display: 'flex',
    backgroundColor: '#d9d9d9',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 32px)',
      marginRight: theme.spacing(2),
    },
  },
  content2: {
    marginLeft:30,
    flex: 1,
  },
  image: {
    width: '50%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0 20px 20px 0',
    alignSelf: 'flex-end',
    
  },
  text0 :{
    color : blue

  },
  recomandationFrame: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F4F6F7',
    borderRadius: '1.125rem',
    overflowX: 'auto',
    height: '2.25rem',
    minWidth: '2.25rem',
    padding: '0.4375rem 0.46875rem',
    [theme.breakpoints.up('md')]: {
      height: '3rem',
      minWidth: '3rem',
      padding: '0.5625rem 0.625rem',
    },
  },
  smallFrame: {
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    borderRadius: 50,
    
    
    backgroundColor: '#fff',
    marginRight: '0.5rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '&.active': {
      backgroundColor: '#0077c2',
      color: '#fff',
    },
    cursor: 'pointer',
    height: '2.25rem',
    minWidth: '2.25rem',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      height: '3rem',
      minWidth: '3rem',
    },
  },
  cube: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#EBEDEF ',
    marginRight: '0.5rem',
    transform: 'rotateX(45deg) rotateY(45deg) scale(0.5)',
    transformStyle: 'preserve-3d',
    perspective: 100,
  },

  maskgroup: {
    alignItems: 'center',
    backgroundColor: '#F4F6F7',
    borderRadius: '10px',
    display: 'flex',
    height: 350,
    minWidth: '175px',
    padding: '13px 10px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 32px)',
      marginRight: theme.spacing(2),
    },
  },
  frame1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#d9d9d9',
    borderRadius: 15,
    display: 'flex',
    width : 250,
    height: 300,
    marginRight :25,
    minWidth: 20,
    padding: '4px 10px',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 32px)',
      marginRight: theme.spacing(2),
    },
  },
  
  save: {
    marginLeft :10,
    marginTop :10,
    borderRadius : 20,
    letterSpacing: '0.6px',
    lineHeight: 'normal',
    minHeight: '28px',
    whiteSpace: 'nowrap',
    backgroundColor : '#196F3D'
  },
  text: {
    position :'relative',
    marginTop: '110%',
    textAlign: 'center',
  },
  title1: {
    fontFamily: "Inter",
    
    fontSize: "18px",
    color: "black",
   
  },
  subtitle2: {
    marginRight : 20,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    color: "gray",
    textShadow: "1px 1px 2px #ccc",
   
  },
  box:{
    textShadow: "1px 1px 2px #ccc",
    color: "gray",
  
  },
  h1:{
    color: "white",
    fontWeight: "800",
  },

}));

