import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomDrawer from './components//sidebar/Drawer';
import MainContent from './components/mainContent/MainContent';
import RightFrame from './components/rightframe/RightFrame';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
    transition: "background-color 0.5s ease",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start',
    },
  },
  leftGrid: {
    backgroundColor: "#fff",
    transition: "background-color 0.5s ease",
  },
  rightGrid: {
    backgroundColor: "#fff",
    transition: "background-color 0.5s ease",
  },
  drawer: {
    backgroundColor: "#fff",
    transition: "background-color 0.5s ease",
  },
}));

function App() {
  const classes = useStyles();
  const [isLightMode, setIsLightMode] = useState(true);

  const handleLightModeToggle = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: isLightMode ? "#fff" : "#333" }}>
      <CustomDrawer onLightModeToggle={handleLightModeToggle} />
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6} md={9} className={classes.leftGrid} style={{ backgroundColor: isLightMode ? "#fff" : "#333" }}>
          <MainContent className={classes.mainContent} style={{ backgroundColor: isLightMode ? "#fff" : "#333" }} />
        </Grid>
        <Grid item xs={12} md={3} style={{ backgroundColor: isLightMode ? "#fff" : "#333" }} className={classes.rightGrid}>
        <RightFrame style={{ backgroundColor: isLightMode ? "#fff" : "#333" }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

