import React from "react";
import { mergeAllClasses } from "../../helpers/mergeClasses";

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300 font-normal rounded",
  disabled: "opacity-50 cursor-not-allowed",
  size: {
    small: "px-8 py-1 text-sm",
    normal: "px-9 py-1",
    large: "px-10 py-3 text-lg",
  },
  variant: {
    solid:
      "bg_black-900 hover:bg-black focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
    blackOutline:
      "border-solid text-black border-2 border-black focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 ",
    redOutline:
      "border-solid text-black border-2 border_red focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button = ({
  children,
  type = "button",
  className,
  variant = "primary",
  size = "normal",
  disabled = false,
  ...props
}) => (
  <button
    disabled={disabled}
    type={type}
    className={mergeAllClasses(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${disabled && classes.disabled}
                ${className}
            `)}
    {...props}>
    {children}
  </button>
);

export default Button;
