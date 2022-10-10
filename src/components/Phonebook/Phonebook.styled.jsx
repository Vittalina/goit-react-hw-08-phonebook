import styled from '@emotion/styled';

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  width: 100%;
  height: 30px;
  color: black;
  margin-bottom: 5px;
  border-color: grey;

  &:focus {
    outline: none;
    border-color: #228b22;
    box-shadow: 0 0 10px #228b22;
  }
`;

export const Label = styled.label`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
  background-color: #228b22;
  border-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  min-width: 100px;
  height: 40px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px 32px;
`;
