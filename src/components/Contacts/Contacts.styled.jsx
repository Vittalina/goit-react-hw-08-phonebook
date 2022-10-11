import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 220px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  color: black;
  background-color: #228b22;
  border-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  min-width: 45px;
  height: 20px;*/
  margin-left: 10px;
  & svg {
    width: 25px;
    height: 25px;
  }
  &:hover {
    color: #228b22;
  }
`;
