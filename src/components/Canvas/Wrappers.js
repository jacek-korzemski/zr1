import styled from "styled-components";

export const CanvasWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border: 1px solid black;
    flex: 1 1;
    background: #dddddd;
    flex-direction: column;
    border-radius: 16px;
    > svg {
        flex: 0 1 100%;
    }
`;
