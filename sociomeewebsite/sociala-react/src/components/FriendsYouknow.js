import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./friendsyouknow.css"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
<div className="card friendsknow">
 <h3>People you may know</h3>
    <div className={classes.root}>
  
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><div class="card-body p-0 d-flex">
                                <figure class="avatar me-3">
                                <img src="assets/images/ajay.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Saddy<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">10 Common Friends</span></h4><div class="ms-auto pointer"></div></div></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <button className="friendfollow">Follow</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><div class="card-body p-0 d-flex">
                                <figure class="avatar me-3">
                                <img src="assets/images/ajay.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">vivek<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">15 Common Friends</span></h4><div class="ms-auto pointer"></div></div></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <button className="friendfollow">Follow</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><div class="card-body p-0 d-flex">
                                <figure class="avatar me-3">
                                <img src="assets/images/ajay.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Rinkee<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 Common Friends</span></h4><div class="ms-auto pointer"></div></div></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <button className="friendfollow">Follow</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
          <div class="card-body p-0 d-flex">
                                <figure class="avatar me-3">
                                <img src="assets/images/ajay.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Siddhant<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">20 Common Friends</span></h4><div class="ms-auto pointer"></div></div>
          </Typography>
          

        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
          <button className="friendfollow">Follow</button>
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Show All</Typography>
        </AccordionSummary>
      </Accordion>
    </div>

</div>

  );
}
