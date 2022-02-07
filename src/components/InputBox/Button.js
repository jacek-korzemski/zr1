import React from "react";
import { ButtonWrapper } from "./Wrappers";

const Button = (props) => {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
