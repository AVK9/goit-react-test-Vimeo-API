import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center;
  justify-content: center; */
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const Headss = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
`;
export const TextBox = styled.div`
  width: 300px;
`;
export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  /* text-transform: uppercase; */
`;
export const BtnGoback = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  /* text-transform: uppercase; */
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.02);
    animation: ${({ theme }) => theme.animation.cubicBezier};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
