import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  color: #ff6060;

  @media screen and (min-width: 769px) and (max-width: 992px) {
    text-align: center;
  }

  @media screen and (min-width: 375px) and (max-width: 768px),
    only screen and (max-width: 374px) {
    text-align: center;
  }
`;

export const ErrorTitle = styled.h1`
  font-size: 288px;
  color: #ff6060;
  font-weight: 700;
  margin-top: 139px;
  margin-bottom: 139px;

  @media screen and (min-width: 769px) and (max-width: 992px),
    (min-width: 375px) and (max-width: 768px),
    only screen and (max-width: 374px) {
    font-size: 96px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 36px;
  color: #ff6060;

  @media screen and (min-width: 769px) and (max-width: 992px),
    (min-width: 375px) and (max-width: 768px),
    only screen and (max-width: 374px) {
    font-size: 18px;
    width: 260px;
    height: 52px;
  }
`;

export const ReturnLink = styled.a`
  font-size: 18px;
  margin-top: 139px;
  margin-bottom: 139px;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 769px) and (max-width: 992px),
    (min-width: 375px) and (max-width: 768px),
    only screen and (max-width: 374px) {
    font-size: 14px;
    margin-top: 133px;
  }
`;
