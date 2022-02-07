import React from "react";
import ReactDOM from "react-dom";
import App, { AppContext } from "App";
import { AppWrapper } from "components/AppWrapper/AppWrapper";
import { CanvasWrapper } from "components/Canvas/Wrappers";
import { ErrorWrapper } from "components/Error/Wrappers";
import { InputBoxWrapper, ButtonWrapper, InputWrapper } from "components/InputBox/Wrappers";
import { IsLoadingWrapper } from "components/IsLoading/Wrappers";
import Canvas from "components/Canvas/Canvas";
import Error from "components/Error/Error";
import Button from "components/InputBox/Button";
import InputBox from "components/InputBox/InputBox";
import TextInput from "components/InputBox/TextInput";
import IsLoading from "components/IsLoading/IsLoading";
import { __mock_api } from "__mocks__/api1";

const StyledComponents = [
    <AppWrapper />,
    <CanvasWrapper />,
    <ErrorWrapper />,
    <InputBoxWrapper />,
    <ButtonWrapper />,
    <InputWrapper />,
    <IsLoadingWrapper />,
];
const FunctionalComponents = [
    <Canvas />,
    <Canvas data={__mock_api} />,
    <Error />,
    <Error name={"Error 404"} />,
    <Error name={"Error 404"}>Can't find target data</Error>,
    <Button />,
    <Button disabled={true} />,
    <Button disabled={false} />,
    <Button>Button text</Button>,
    <InputBox />,
    <TextInput />,
    <IsLoading />,
];

test("The main App component should render.", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <AppContext.Provider value={null}>
            <App />
        </AppContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

test("Styled components should render.", () => {
    const div = document.createElement("div");
    for (let i = 0; i < StyledComponents.length; i++) {
        ReactDOM.render(<AppContext.Provider value={null}>{StyledComponents[i]}</AppContext.Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});

test("Functional components should render.", () => {
    const div = document.createElement("div");
    for (let i = 0; i < FunctionalComponents.length; i++) {
        ReactDOM.render(<AppContext.Provider value={{ isLoading: true }}>{FunctionalComponents[i]}</AppContext.Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});
