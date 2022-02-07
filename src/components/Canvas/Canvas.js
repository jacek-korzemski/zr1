import React, { useEffect, useState, useContext } from "react";
import { CanvasWrapper } from "./Wrappers";
import { AppContext } from "App";

const Canvas = ({ data }) => {
    const app = useContext(AppContext);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        let validation = true;
        if (data && data.project && data.project.items) {
            for (let i = 0; i < data.project.items.length; i++) {
                if (typeof data.project.items[i].rotation !== "number") {
                    validation = false;
                }
                if (data.project.items[i].width < 0 || data.project.items[i].height < 0) {
                    validation = false;
                }
                if (data.project.items[i].x < 0 || data.project.items[i].y < 0) {
                    validation = false;
                }
            }
        }

        setIsValid(validation);
        if (!validation) {
            app.setAlert({
                name: "Invalid data",
                message: "Project contains invalid data",
            });
        }
    }, [data]);

    return (
        <CanvasWrapper>
            {data && isValid && (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
                    <svg
                        svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox={`0 0 ${data.project.width} ${data.project.height}`}
                    >
                        <rect fill="#efefef" width="100%" height="100%"></rect>
                        <>
                            {data.project.items.map((elem, index) => (
                                <g key={index}>
                                    <rect
                                        data-x={elem.x}
                                        data-y={elem.y}
                                        fill={elem.color}
                                        width={elem.width}
                                        height={elem.height}
                                        transform={`translate(${elem.x} ${elem.y}) 
                                            rotate(${elem.rotation})
                                            translate(${-elem.width / 2} ${-elem.height / 2})`}
                                    ></rect>
                                </g>
                            ))}
                        </>
                    </svg>
                </svg>
            )}
        </CanvasWrapper>
    );
};

export default Canvas;
