import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import billingInformationData from './RightFramedata';
import {useStyles} from './rightFrameStyle';
import Drawer from "@material-ui/core/Drawer";
import CircleIcon from '@mui/icons-material/Circle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SimCardIcon from '@mui/icons-material/SimCard';
import CancelIcon from '@mui/icons-material/Cancel';

function RightFrame(props) {
  const classes = useStyles();

  const [active, setActive] = useState('');

  return (
    
    <div className={classes.root}>
      {/* Title */}
      <div className={classes.title}>
        <h3>Order information</h3>
        <CancelIcon className={classes.cross} />
      </div>

      {/* Card */}
      <div className={classes.card}>
        {/* Card information */}
        <div className={classes.cardContainer}>
          <div className={classes.fcard}>
            <p>Jajan Card</p>
            <p>1234 ****</p>
          </div>
          <div className={classes.mcard}>
            <p>****</p>
          </div>
          <div className={classes.lcard}>
            <p>WHYZ</p>
            <p>****</p>
          </div>
        </div>
        {/* mi-circle */}
        <div className={classes.demi}>
          <div className={classes.demiCercle}></div>
        </div>
      </div>
      {/* Second card */}
      <div className={classes.scard}>
        {/* Information */}
        <div className={classes.fscard}>
          <p className={classes.finfo}>CARD HOLDER</p>
          <p className={classes.linfo}>MAMANG ZAHRI</p>
        </div>
        <div className={classes.lscard}>
          <p className={classes.finfo}>EXPIRED</p>
          <p className={classes.linfo}>10/26</p>
        </div>
        <div className={classes.credit}>
          <SimCardIcon className={classes.cart} />
        </div>
      </div>
      {/* Rectangle container */}
      <div className={classes.rectangle}>
        <div className={classes.contain}>
          <div className={classes.tcircle}>
            <FiberManualRecordIcon className={classes.ticon} />
            <CircleIcon className={classes.ticon} />
            <CircleIcon className={classes.ticon} />
          </div>
          {/* Title */}
          <h5 className={classes.pay}>Payment</h5>
          {/* Jajan card */}
          <div className={classes.jacard}>
            <RadioButtonCheckedIcon className={classes.jicon} />
            <p>Jajan Card</p>
            <BarChartIcon className={classes.jicon} />
          </div>
          <div className={classes.micard}>
            <RadioButtonCheckedIcon className={classes.micon} />
            <p>Nginjem Card</p>
            <BarChartIcon className={classes.micon} />
          </div>
          <div className={classes.miscard}>
            <div className={classes.carre}></div>
            {/* Info carre */}
            <div className={classes.incarre}>
              <h5>Kids Duck Toys</h5>
              <p>Category: Accessories</p>
              
            </div>
          </div>
          
          {/* Info details */}
          
          <div className={classes.info}>
            <div className={classes.left}>
              <p>Order Detail</p>
              <p>Subtotal</p>
              <p>Shipping</p>
            </div>
            <div className={classes.right}>
              <p className={classes.name}>Kids Duck Toys</p>
              <p className={classes.price}>
                $88.00 <span>$44.00</span>
              </p><p className={classes.free}>Free</p>
             
            </div>
            
          </div>
          {/* Line dash */}
          <div className={classes.line}></div>
          {/* Information price */}
          <div className={classes.total}>
            <div className={classes.tbtn}>
              <div className={classes.menuList}>
                <div className={classes.next}>
                  <ArrowRightAltIcon className={classes.nicon} />
                </div>
                <p>Total</p>
                <span className={classes.tdiv}>$44.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightFrame;
