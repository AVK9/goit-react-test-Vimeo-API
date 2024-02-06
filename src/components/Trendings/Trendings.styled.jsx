import styled from '@emotion/styled';
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 0;
`;
export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-color: ${props => props.color};

  border: 1px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    animation: ${({ theme }) => theme.animation.cubicBezier};
  }
`;
export const Card = styled.div`
  width: 200px;
  height: 350px;

  background-color: ${props => props.color};

  border: 1px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  overflow: hidden;
`;
export const Img = styled.img`
  /* width: 200px; */
  height: 300px;
  overflow: hidden;
  object-fit: cover;
`;
