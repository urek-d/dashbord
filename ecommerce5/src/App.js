import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomDrawer from './components/sidebar/Drawer';
import MainContent from './components/mainContent/MainContent';
import RightFrame from './components/rightframe/RightFrame';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
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
  drawer: {
    backgroundColor: theme.palette.background.default,
    transition: "background-color 0.5s ease",
  },
}));

function App() {
  const classes = useStyles();
  const [isLightMode, setIsLightMode] = useState(true);

  const handleLightModeToggle = () => {
    setIsLightMode(!isLightMode);
  };

  const lightTheme = createTheme({
    palette: {
      type: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <div className={classes.root}>
        <CustomDrawer onToggleTheme={handleLightModeToggle} isLightMode={isLightMode} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <MainContent className={classes.mainContent} />
          </Grid>
          <Grid item xs={12} md={3}>
            <RightFrame />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
