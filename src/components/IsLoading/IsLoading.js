import React from "react";
import { IsLoadingWrapper } from "./Wrappers";

const IsLoading = (props) => {
    return (
        <IsLoadingWrapper>
            <div className={`main-content ${props.isLoading ? "hide" : ""}`}>{props.children}</div>
            <div className={`loading ${props.isLoading ? "show" : ""}`}>
                <span>↻</span>
            </div>
        </IsLoadingWrapper>
    );
};

export default IsLoading;
