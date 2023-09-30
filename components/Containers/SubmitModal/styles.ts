import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 35px 35px 35px;
  border-radius: 8px;
  border: 1px solid #df8686;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1d;
  margin-bottom: 19px;
  text-align: center;
`;

export const Message = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #747474;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
