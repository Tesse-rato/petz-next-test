import styled, { css } from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const Container = styled.div<{
  open: boolean;
}>`
  padding: 10px;
  border-radius: 50px;
  background-color: #e40f0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 57px;
  height: 54px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    width: 234px;
    transition: width 500ms cubic-bezier(0.17, 0.01, 0.66, -0.01);
  }
  ${(p) =>
    p.open
      ? css`
          width: 234px;
        `
      : css`
          transition: width 500ms cubic-bezier(0.17, 0.01, 0.66, -0.01);
          width: 57px;
        `}
`;

export const PokeBall = styled(Image)`
  margin-right: 14px;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;
