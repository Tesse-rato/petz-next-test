import React, { useState, useRef, useEffect } from "react";
import {
  ArrowIco,
  Container,
  Input,
  Label,
  OptionItem,
  OptionsContainer,
} from "./styles";
import ArrowSvg from "../../../public/images/arrow.svg";

interface Props
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  label?: string;
  options: Array<{ label: string; value: string }>;
  onChange(value: string): void;
  value: string;
}

export default function Select({
  label,
  style,
  options,
  onChange,
  value,
  ...rest
}: Props) {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [optionToDisplay, setOptionToDisplay] = useState(options);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  function handleOnChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { value } = ev.target;
    setInputValue(value);
    if (!value) {
      setSelectedIndex(-1);
      onChange("");
      setInputValue("");
      return setOptionToDisplay(options);
    } else {
      setOptionToDisplay(
        options.filter((op) => RegExp("^" + value, "gi").test(op.label))
      );
    }
  }

  function handleOptionClick(
    { label, value }: Props["options"][0],
    index: number
  ) {
    setFocus(false);
    onChange(value);
    setInputValue(label);
    setSelectedIndex(index);
    setOptionToDisplay(options);
  }

  function handleOnKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    const key = ev.key;
    const index = selectedIndex;

    function scrollIntoView(pos: number) {
      const openedOptionsContainer = document.querySelector(".opct-open");
      if (openedOptionsContainer) {
        const openedOption = openedOptionsContainer.querySelector(".opt-sel");
        if (openedOption) {
          if (pos * 30 > 30) openedOptionsContainer.scrollTo(0, pos * 30 - 30);
          else openedOptionsContainer.scrollTo(0, 0);
        }
      }
    }

    function keyRoutine(pos: number) {
      onChange(optionToDisplay[pos].value);
      setInputValue(optionToDisplay[pos].label);
      setSelectedIndex(pos);
      setTimeout(() => scrollIntoView(pos), 50);
    }

    if (focus) {
      switch (key) {
        case "ArrowDown": {
          if (selectedIndex < optionToDisplay.length - 1)
            keyRoutine(selectedIndex + 1);
          break;
        }
        case "ArrowUp": {
          if (selectedIndex > 0) keyRoutine(selectedIndex - 1);
          break;
        }
        case "Enter": {
          setOptionToDisplay(options);
          setFocus(false);
          break;
        }
        default:
          return;
      }
    }
  }

  useEffect(() => {
    if (!optionToDisplay.length) setOptionToDisplay(options);
  }, [options]);

  useEffect(() => {
    if (value !== inputValue) setInputValue(value);
  }, [value]);

  return (
    <Container style={style} label={label}>
      <Label>{label}</Label>
      <Input
        {...rest}
        focus={focus ? "open" : "close"}
        onChange={handleOnChange}
        value={inputValue}
        onKeyDown={handleOnKeyDown}
        onClick={() => setTimeout(() => setFocus(true), 100)}
        onFocus={() => setTimeout(() => setFocus(true), 100)}
        onBlur={() => setTimeout(() => setFocus(false), 100)}
      />
      <OptionsContainer
        className={focus ? "opct-open" : "opct-close"}
        focus={focus ? "open" : "close"}
        label={label}
      >
        {Array.isArray(optionToDisplay) &&
          optionToDisplay.length > 0 &&
          optionToDisplay.map((option, i) => (
            <OptionItem
              key={option.label + i}
              className={option.label === inputValue ? "opt-sel" : "opt-n-sel"}
              selected={option.label === inputValue}
              onClick={() => handleOptionClick(option, i)}
            >
              {option.label}
            </OptionItem>
          ))}
      </OptionsContainer>
      <ArrowIco focus={focus ? "open" : "close"} src={ArrowSvg} alt="Arrow" />
    </Container>
  );
}
