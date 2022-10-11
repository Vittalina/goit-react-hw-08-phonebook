import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-block;
  width: 56px;
  height: 24px;
  text-align: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-color: #228b22;
  box-shadow: 0 0 10px #228b22;
`;
