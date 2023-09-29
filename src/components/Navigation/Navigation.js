import { useAuth } from 'hooks/useAuth';
import { NavLinkHome } from './Navigation.styled';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkHome to="/">Home</NavLinkHome>
      {isLoggedIn && <NavLinkHome to="/contacts">Contacts</NavLinkHome>}
    </nav>
  );
};
