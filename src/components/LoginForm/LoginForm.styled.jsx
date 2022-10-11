import styled from '@emotion/styled';

export const Form = styled.form`
  width: 280px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  width: 100%;
  height: 20px;
  color: black;
  margin-bottom: 5px;
  border-color: grey;
  &:focus {
    outline: none;
    border-color: #228b22;
    box-shadow: 0 0 10px #228b22;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 65px;
  height: 20px;
  text-align: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-color: #228b22;
  box-shadow: 0 0 10px #228b22;
`;
