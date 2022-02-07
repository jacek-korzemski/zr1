import React, { useState } from "react";
import InputBox from "components/InputBox/InputBox";
import Canvas from "components/Canvas/Canvas";
import { AppWrapper } from "components/AppWrapper/AppWrapper";
import { getData, init } from "utils/getData";
import Error from "components/Error/Error";

export const AppContext = React.createContext();

const App = () => {
    const [data, setData] = useState(null);
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    return (
        <AppContext.Provider value={{ data, id, alert, isLoading, setData, setId, setAlert, setIsLoading, getData, init }}>
            <AppWrapper>
                <div>
                    <InputBox />
                    {alert && <Error name={alert.name}>{alert.message}</Error>}
                </div>
                <div>
                    <Canvas data={data} />
                </div>
            </AppWrapper>
        </AppContext.Provider>
    );
};

export default App;
