import React, { useEffect } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { ListItemSecondaryAction } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'

import fetchContactsAction from '../Redux/actions/fetchContacts'
import {
  getContactsError,
  getContacts,
  getContactsPending,
} from '../Redux/reducers/contactReducer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 980,
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default function ContactList() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const _state = useSelector(state => getContacts(state))
  const pending = useSelector(state => getContactsPending(state))
  const error = useSelector(state => getContactsError(state))
console.log(`Lista de contactos: ${JSON.stringify( _state.contacts)}`)
  useEffect(() => {
    dispatch(fetchContactsAction())
  }, [dispatch])

  //"https://www.vippng.com/png/detail/363-3631840_profile-icon-png-profile-icon-png-white-transparent.png"
  return error ? (
    <h2>An error occurred</h2>
  ) : pending ? (
    <h3>Loading...</h3>
  ) : (
    <List className={classes.root}>
      { _state.contacts && _state.contacts.length &&
         _state.contacts.map((item: any) => {
          return (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  <img
                    src="http://localhost:3001/profile-icon.jpg"
                    alt="Avatar"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Name" secondary={item.name} />
              <ListItemText primary="Address" secondary={item.address} />
              <ListItemText primary="Phone" secondary={item.Phone} />
              <ListItemText primary="Email" secondary={item.email} />
              <ListItemSecondaryAction>
                <ListItemText primary="Edit" />
                <ListItemText primary="Remove" />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
    </List>
  )
}
