import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  StyledError,
  Container,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/accountFetch';
import { selectItems } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('* Name is required'),
  number: Yup.string()
    .min(6, 'Phone number is too short')
    .max(16, 'Phone number is too long')
    .required('* Enter phone number'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          let isContactExists = contacts.find(
            contact =>
              contact.name.toLowerCase() === values.name.toLowerCase() ||
              contact.number === values.number
          );
          if (isContactExists) {
            return alert(
              `${values.name} or ${values.number} is already in contacts`
            );
          }
          dispatch(addContact({ ...values }));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledField type="text" name="name" placeholder="Jacob Mercer" />
            <StyledError name="name" component="div" />
          </label>

          <label>
            Number
            <StyledField type="number" name="number" placeholder="xxx-xx-xx" />
            <StyledError name="number" component="div" />
          </label>
          <Button type="submit" variant="contained">
            Add contact
          </Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};
