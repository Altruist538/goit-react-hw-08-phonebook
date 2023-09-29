import { NavLinkRegister } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkRegister to="/register">Register</NavLinkRegister>
      <NavLinkRegister to="/login">Log In</NavLinkRegister>
    </div>
  );
};
