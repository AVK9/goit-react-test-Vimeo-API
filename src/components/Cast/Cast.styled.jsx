import styled from '@emotion/styled';
export const CastInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;
export const Img = styled.img`
  /* width: 200px; */
  height: 220px;
  overflow: hidden;
  object-fit: cover;
`;
export const Item = styled.li`
  list-style: none;
`;
