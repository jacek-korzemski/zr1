import React from "react";
import { ErrorWrapper } from "./Wrappers";
import Button from "components/InputBox/Button";
import { AppContext } from "App";

const Error = (props) => {
    const app = React.useContext(AppContext);

    return (
        <ErrorWrapper>
            {props?.name && (
                <>
                    <div className="top-bar">{props.name}</div>
                    <div className="content">{props.children}</div>
                    <div className="buttons">
                        <Button onClick={() => app.setAlert(null)}>Close</Button>
                    </div>
                </>
            )}
        </ErrorWrapper>
    );
};

export default Error;
