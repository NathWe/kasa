import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: #000000;
  width: 100%;
  height: 150px;
  color: white;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 4rem;
  padding-top: 209px;

  p {
    margin: 40px 0 30px 0;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 374px) {
    font-size: 12px;
  }
`;
