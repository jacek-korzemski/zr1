import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const IsLoadingWrapper = styled.div`
    position: relative;
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-size: 16px;
        color: black;
        opacity: 0;
        pointer-events: none;
        &.show {
            opacity: 1;
            span {
                display: inline-block;
                font-size: 32px;
                animation: ${rotate} 1s linear infinite;
                font-weight: bold;
            }
        }
    }
    .main-content {
        transition: all 0.3s;
        opacity: 1;
        &.hide {
            pointer-events: none;
            opacity: 0;
        }
    }
`;
