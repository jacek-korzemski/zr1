import styled from "styled-components";

export const ErrorWrapper = styled.div`
    margin-top: 30px;
    .top-bar {
        border-radius: 16px 16px 0 0;
        padding: 10px;
        font-size: 16px;
        font-style: italic;
        color: red;
        background: orange;
        border: 1px solid red;
    }
    .content {
        min-height: 32px;
        border: 1px solid red;
        border-top: none;
        border-bottom: none;
        padding: 10px;
        background: orange;
    }
    .buttons {
        height: 45px;
        border: 1px solid red;
        border-radius: 0 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr;
        overflow: hidden;
        div {
            background: red !important;
            color: white !important;
            &:hover {
                background: white !important;
                color: black !important;
            }
        }
    }
`;
