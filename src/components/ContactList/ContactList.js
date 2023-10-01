import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Container } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/contacts/accountFetch';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const visibleQuizItems = useSelector(selectVisibleContacts);
  return (
    <Container>
      <List>
        {visibleQuizItems.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              color="inherit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <ClearIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
