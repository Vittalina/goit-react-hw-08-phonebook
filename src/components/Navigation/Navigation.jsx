import { useAuth } from 'hooks';
import { StyledNavLink } from './Navigation.styled';
// import HomeIcon from '@mui/icons-material/Home';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
        Home
        {/* <HomeIcon fontSize="large" /> */}
      </StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
