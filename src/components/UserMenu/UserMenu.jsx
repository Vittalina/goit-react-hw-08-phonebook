import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
