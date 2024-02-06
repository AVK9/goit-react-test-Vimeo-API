import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1 px solid rgb(255, 255, 255);
  outline: none;

  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  width: 80px;
  height: 30px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: rgb(48, 48, 48);
  color: white;
  font-weight: 700;
  &:hover {
    opacity: 1;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const InpuBox = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;
