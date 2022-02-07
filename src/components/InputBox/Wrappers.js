import styled from "styled-components";

export const InputBoxWrapper = styled.div`
    .top-bar {
        border-radius: 16px 16px 0 0;
        padding: 10px;
        font-size: 16px;
        font-style: italic;
        color: #333333;
        background: white;
        border: 1px solid black;
    }
    .content {
        min-height: 100px;
        border: 1px solid black;
        border-top: none;
        border-bottom: none;
        padding: 10px;
        background: #dddddd;
    }
    .buttons {
        height: 45px;
        border: 1px solid black;
        border-radius: 0 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
    }
`;

export const ButtonWrapper = styled.div`
    padding: 10px;
    font-size: 16px;
    font-style: italic;
    border: 1px solid black;
    margin: -1px;
    color: #333333;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: white;
        background: #333333;
    }
    background: ${(props) => (props.disabled ? "gray" : "white")};
    pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
`;

export const InputWrapper = styled.div`
    padding: 10px 2px;
    input[type="text"] {
        width: 100%;
        padding: 10px 0 0 0;
        font-size: 16px;
        color: black;
        background: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
    }
    .label {
        font-size: 14px;
        color: #333333;
        font-style: italic;
    }
`;
