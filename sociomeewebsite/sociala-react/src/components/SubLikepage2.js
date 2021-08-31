import React from 'react';
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
    maxWidth: '36ch',
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
        <h3>Liked Pages</h3>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="assets/images/likepage1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="
          Chrimson"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"Clothing Store"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="
          Digital Pixel "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"Software Company "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage5.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="assets/images/likepage2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch "
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography>
              {"neighborhood"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        
      </ListItem>
    </List>
  );
}
