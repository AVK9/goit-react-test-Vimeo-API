import styled from '@emotion/styled';

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center;
  justify-content: center; */
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Head = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
`;
