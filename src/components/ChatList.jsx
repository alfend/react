import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: 'white',
  },
  listItemChat: {
    whiteSpace: 'nowrap',
  },
}));

export default function CheckboxListSecondary() {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {['User1','User2','User3','User4'].map(value => {
        const labelId = `list-secondary-label-${value}`;
        return (
          <ListItem key={value} button className={classes.listItemChat}>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        );
      })}
    </List>
  );
}
