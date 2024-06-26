import { MouseEvent, useState } from "react";
import { HandleChangeText, handleOnKeyDown } from "../../../interfaces/global.interface";
import Svg, { SvgType } from "../../assets/icons/Svg";

export interface InputProps {
  svg?: {
    type: SvgType;
    height?: number;
    width?: number;
    color?: string;
  };
  svgTwo?: {
    type: string;
    height?: number;
    width?: number;
    color?: string;
  };
  styleClass: string;
  errorMessage: string | undefined;
  input: {
    type?: string;
    placeholder: string;
    value: string | number;
    handleOnChange: HandleChangeText
    handleOnKeyDown?: handleOnKeyDown
    name: string;
    dataset_extra?: string;
    dataset_index?: string;
    disabled?: boolean;
  };
}

function Input({ svg, svgTwo, styleClass, errorMessage, input }: InputProps) {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setToggle((data) => (data ? false : true));
  };

  return (
    <div className={`user-input input__container--${styleClass}`}>
      <div className={`${errorMessage ? "input_error" : "input_brand"} input__content--${styleClass}`} >
        <span style={{ border: errorMessage ? "1px solid #DB2424" : (input.value.toString().length === 0 || (Number(input.value) === 0 && input.value.toString().length === 1)) ? "1px solid #ff0d58" : "1px solid #66B949" }}>
          <span className={`input__svg--${styleClass}`}>
            {svg &&
              Svg({
                type: svg.type as SvgType,
                height: svg.height || 16,
                width: svg.width || 16,
                color: errorMessage ? "#DB2424" : svg.color ? svg.color : "#848FAC",
              })}
          </span>
          <input
            onKeyDown={(event) => input.handleOnKeyDown && input.handleOnKeyDown(event)}
            type={input.type !== "password" ? input.type : toggle ? "text" : input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(event) => input.handleOnChange(event)}
            name={input.name}
            data-extra={input.dataset_extra}
            data-index={input.dataset_index}
            disabled={input.disabled}
          />
          <span
            className={`input__svgTwo--${styleClass}`}
            onClick={handleOnClick}
          >
            {svgTwo &&
              Svg({
                type: svgTwo.type !== "eye" ? svgTwo.type as SvgType : toggle ? "openEye" : "closedEye",
                height: svgTwo.height || 16,
                width: svgTwo.width || 16,
                color: errorMessage ? "#DB2424" : svgTwo.color ? svgTwo.color : "#848FAC",
              })}
          </span>
        </span>
      </div>

      <div className={`input__error--${styleClass}`}>
        <div>
          <div className={`input__message${styleClass}`}>
            <span>{errorMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
