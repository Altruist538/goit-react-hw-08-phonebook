import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button, Container } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/contacts/accountFetch';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
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
            <Button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
