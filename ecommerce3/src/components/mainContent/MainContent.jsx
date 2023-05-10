import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

import React, { useState } from "react";
import { useStyles } from "./MainContent.Style";



function MainContent() {
  const classes = useStyles();

  function SearchBar() {
    const classes = useStyles();

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search anything"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          className={classes.notificationButton}
          aria-label="show notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
      </div>
    );
  
  }

const [activeIndex, setActiveIndex] = useState(-1);
const handleClick = (index) => {
  setActiveIndex(index);
};
  return (
    <div className={classes.content}>
      <div className={classes.div1}>
        <div className={classes.title}>Hello Fabio Veiera</div>
        <Toolbar>
          <SearchBar />
        </Toolbar>
      </div>
      <div className={classes.subtitle}>Welcome back, explore Now!</div>

      <div className={classes.rectangle}> </div>
      <div className={classes.title}>New Trend Style</div>

      <div className={classes.recomandationFrame}>
      <div
          className={`${classes.smallFrame} ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <div className={classes.cube} />
          <span>Recommandation</span>
        </div>
        <div
          className={`${classes.smallFrame} ${
            activeIndex === 1 ? "active" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <div className={classes.cube} />
          <span>Lifestyle</span>
        </div>
        <div
          className={`${classes.smallFrame} ${
            activeIndex === 2 ? "active" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <div className={classes.cube} />
          <span>Accessoires</span>
        </div>
        <div
          className={`${classes.smallFrame} ${
            activeIndex === 3 ? "active" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <div className={classes.cube} />
          <span>T-shirt</span>
        </div>
        <div
          className={`${classes.smallFrame} ${
            activeIndex === 4 ? "active" : ""
          }`}
          onClick={() => handleClick(4)}
        >
          <div className={classes.cube} />
          <span>Hobby</span>
        </div>
        <div className={classes.smallFrame}>
          <div className={classes.cube} />
        </div>
      </div> 
      <div className={classes.maskgroup}>
        <div className={classes.frame1}>
          <div className={classes.save}>
            <spam> save 50% </spam>
          </div>
        </div>
        <div className={classes.frame1}>
          <div className={classes.save}>
            <spam> save 45% </spam>
          </div>
        </div>
        <div className={classes.frame1}>
          <div className={classes.save}>
            <spam> save 20% </spam>
          </div>
        </div>
        <div className={classes.frame1}>
          <div className={classes.save}>
            <spam> save 50% </spam>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
