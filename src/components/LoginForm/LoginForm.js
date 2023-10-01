import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Label, Form, Container } from './LoginForm.styled';
import Button from '@mui/material/Button';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <Button variant="outlined" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
};
