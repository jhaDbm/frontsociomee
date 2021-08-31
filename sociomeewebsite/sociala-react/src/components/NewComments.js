import React from 'react';
import "./newComments.css"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/assets/images/saddy.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Dhirendra kumar jha"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                50 min ago
              </Typography>
              {" — Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
            </React.Fragment>
          }
        />
      </ListItem>

      <div class="card-body d-flex p-0 mt-0 mb-3 "><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><i class="feather-corner-down-right text-dark text-grey-900 btn-round-sm font-lg"></i>Reply<a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"></a></div>
    
      <ListItem alignItems="flex-start" className="newcommentssecond">
      
        <ListItemAvatar>
        
          <Avatar  alt="Travis Howard"  src="/assets/images/ajay.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Siddhant "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                15 min ago
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>

      <div class="card-body d-flex p-0 mt-0 mb-3 iconscomments"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><i class="feather-corner-down-right text-dark text-grey-900 btn-round-sm font-lg"></i>Reply<a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"></a></div>

      <ListItem alignItems="flex-start" className="newcommentssecond">
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/assets/images/vivek.jpg" />
        </ListItemAvatar>
        <ListItemText
        className="secondcomments"
          primary="Vivek Kumar Mishra"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               28 min ago
              </Typography>
              {' — Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
            </React.Fragment>
          }
        />
        
      </ListItem>
      <div class="card-body d-flex p-0 mt-0 mb-3 iconscomments "><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a> <i class="feather-corner-down-right text-dark text-grey-900 btn-round-sm font-lg"></i>Reply<a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"></a></div>
      <Divider variant="inset" component="li" className="mb-4" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/assets/images/saddy.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Saddy Hussian"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                1 Ghanta ago
              </Typography>
              {' — Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry s standard dummy text ever since the 1500s'}
            </React.Fragment>
          }
        />
        
      </ListItem>
    </List>
  );
}
