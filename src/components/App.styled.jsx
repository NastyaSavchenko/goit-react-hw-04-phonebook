import styled from 'styled-components';

import bg from '../img/notebook.jpg';

export const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 30px;
  text-align: center;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200) {
    width: 1200;
  }

  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('${bg}');
`;
