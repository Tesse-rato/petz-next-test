import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 190px;
  background-color: #e40f0f;
  padding: 15px 60px 30px 60px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: white;
  margin-top: 10px;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: white;
  margin-top: 15px;
`;

export const BreadCrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BreadcrumbText = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;
