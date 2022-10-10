import styled from '@emotion/styled';

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  /* width: 100%; */
  width: 220px;
  height: 30px;
  color: black;
  margin-bottom: 10px;
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
