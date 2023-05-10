import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import ContrastIcon from "@mui/icons-material/Contrast";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, IconButton, Switch } from "@material-ui/core";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import logo from "./logo.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    marginTop: 25,
    height: "40px",
    margin: "10px",
  },
  logout: {
    marginBottom:10,
    position: "relative",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 220,
    height:70,
    borderRadius: 100,
    backgroundColor: "#3f56d7",
    color: "#f9f9fb",
    "&:hover": {
      backgroundColor: "blue",
      color: "#FFFFFF",
    },
  },
  activeItem: {
    color: "#2196f3",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#2196f3",
      backgroundColor: "transparent",
    },
  },
  icon: {
    margin: 7,
    marginTop: 15,
    marginBottom: 20,
  },
  listContainer: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  trait: {
    borderTop: "1px dashed #ccc",
  },
  miscard: {
    position: "relative",
    display: "flex",
    gap: "10px",
  },
  carre: {
    marginLeft: 10,
    marginTop: "50%",
    width: "120px",
    height: "60px",
    background: "#C4C4C4",
    borderRadius: "67.5px",
  },
  incarre: {
    marginTop: "37%",
    padding: "20px",
    marginRight: "75px",
  },
}));

function CustomDrawer(props) {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState(null);

  //const [darkMode, setDarkMode] = useState(false)

  const handleListItemClick = (event, index) => {
    setActiveItem(index);
  };
  const handleDarkModeChange = () => {
    props.onToggleTheme();
  };
  //const handleDarkModeChange = () => {
  //setDarkMode(!darkMode);
  //};
  //const [isLightMode, setIsLightMode] = useState(true);

  // const handleLightModeToggle = () => {
  // setIsLightMode(!isLightMode);
  //props.onLightModeToggle();
  //};

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}>
        <img src={logo} alt="logo" className={classes.logo} />
      </div>

      <div className={classes.miscard}>
        <div className={classes.carre}></div>
       
        <div className={classes.incarre}>
          <div>
            <p>
              fabio <br />
              veiera
            </p>
          </div>
        </div>
      </div>

      <div className={classes.listContainer}>
        <List>
          <div className={classes.trait}></div>

          <ListItem
            button
            selected={activeItem === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            className={activeItem === 0 ? classes.activeItem : null}
            disableRipple
          >
            <ListItemIcon className={classes.icon}>
              <LensOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Main Dashboard" />
          </ListItem>
          <ListItem
            button
            selected={activeItem === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            className={activeItem === 1 ? classes.activeItem : null}
            disableRipple
          >
            <ListItemIcon className={classes.icon}>
              <AccountBalanceWalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>
          <ListItem
            button
            selected={activeItem === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            className={activeItem === 2 ? classes.activeItem : null}
            disableRipple
          >
            <ListItemIcon className={classes.icon}>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Stats" />
          </ListItem>
          <ListItem
            button
            selected={activeItem === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            className={activeItem === 3 ? classes.activeItem : null}
            disableRipple
          >
            <ListItemIcon className={classes.icon}>
              <WalletOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice information" />
          </ListItem>
          <ListItem
            button
            selected={activeItem === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            className={activeItem === 4 ? classes.activeItem : null}
            disableRipple
          >
            <ListItemIcon className={classes.icon}>
              <SupportOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem
            button
            selected={activeItem === 5}
            onClick={(event) => handleListItemClick(event, 5)}
            className={activeItem === 5 ? classes.activeItem : null}
            disableRipple
          >
            <ListItemIcon className={classes.icon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            selected={activeItem === 6}
            onClick={(event) => handleListItemClick(event, 6)}
            className={activeItem === 6 ? classes.activeItem : null}
            disableRipple
          >
            <ListItem button onClick={handleDarkModeChange}>
            <ListItemIcon>
              {props.isLightMode ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemIcon>
            <ListItemText primary={props.isLightMode ? 'Dark' : 'Light'} />
            <Switch checked={!props.isLightMode} onChange={handleDarkModeChange} />
          </ListItem>
          </ListItem>
        </List>
      </div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.logout}
        startIcon={<LogoutOutlinedIcon />}
      >
        Logout
      </Button>
    </Drawer>
  );
}

export default CustomDrawer;
//<IconButton onClick={handleLightModeToggle }></IconButton>  </IconButton>
