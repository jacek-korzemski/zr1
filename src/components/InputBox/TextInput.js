import React from "react";
import { InputWrapper } from "./Wrappers";

const TextInput = (props) => {
    return (
        <InputWrapper>
            <p className="label">ID:</p>
            <input type="text" value={props.value || ""} onChange={props.onChange} readOnly={!props.onChange} />
        </InputWrapper>
    );
};

export default TextInput;
