import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div<{ label?: string }>`
  width: 100%;
  position: relative;
  background-color: white;
  ${(p) =>
    p.label &&
    css`
      padding-top: 34px;
    `}
`;

export const Input = styled.input<{ focus: string }>`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #d5d5d5;
  color: #000;
  text-align: start;
  padding: 0px 14px;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  z-index: 2;
  ${(p) =>
    p.focus === "open" &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  top: 10px;
`;

export const OptionsContainer = styled.div<{
  focus: string;
  label?: string;
}>`
  width: 100%;
  position: absolute;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  overflow: hidden;
  transition: 200ms;
  overflow-y: auto;
  z-index: 3;
  ${(p) =>
    p.label
      ? css`
          top: 75px;
        `
      : css`
          top: 40px;
        `}
  ${(p) =>
    p.focus === "open"
      ? css`
          height: 120px;
          border: 1px solid #d5d5d5;
        `
      : css`
          height: 0px;
          border: none;
        `}
`;

export const OptionItem = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background-color: white;
  color: #000;
  font-size: 14px;
  cursor: pointer;

  ${(p) =>
    p.selected &&
    css`
      background-color: #e40f0f;
      color: white;
    `}

  &:hover {
    background-color: #e40f0f;
    color: white;
  }
`;

export const ArrowIco = styled(Image)<{ focus: string }>`
  position: absolute;
  right: 14px;
  transition: 500ms;
  z-index: 1;
  cursor: pointer;
  bottom: 12px;
  ${(p) =>
    p.focus === "open"
      ? css`
          transform: rotateZ(0deg);
        `
      : css`
          transform: rotateZ(180deg);
        `}
`;
