import { StyledNavLink } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};
