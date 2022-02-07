import React, { useContext } from "react";
import { InputBoxWrapper } from "./Wrappers";
import Button from "./Button";
import TextInput from "./TextInput";
import IsLoading from "components/IsLoading/IsLoading";
import { AppContext } from "App";

const InputBox = () => {
    const app = useContext(AppContext);

    const getData = async () => {
        let id = "";
        app.setAlert(null);
        app.setData(null);
        app.setIsLoading(true);
        if (app.id) {
            id = app.id;
        } else {
            id = await app.init();
            id = id.id;
        }
        app.getData(id)
            .then((res) => {
                if (res.error) {
                    app.setAlert({ name: res.name, message: res.message });
                    app.setIsLoading(false);
                } else {
                    app.setData(res);
                    app.setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <InputBoxWrapper>
            <div className="top-bar">Type ID or leave empty for random</div>
            <div className="content">
                <IsLoading isLoading={app.isLoading}>
                    <TextInput value={app.id} onChange={(e) => app.setId(e.target.value)} />
                    {app?.data?.project?.id && (
                        <p>
                            <small>ID:</small> {app.data.project.id}
                        </p>
                    )}
                    {app?.data?.project?.name && (
                        <p>
                            <small>Name:</small> {app.data.project.name}
                        </p>
                    )}
                </IsLoading>
            </div>
            <div className="buttons">
                <Button
                    onClick={() => {
                        app.setId("");
                        app.setData(null);
                        app.setAlert(null);
                    }}
                    disabled={app.isLoading}
                >
                    Reset
                </Button>
                <Button onClick={getData} disabled={app.isLoading}>
                    Get Data &gt;
                </Button>
            </div>
        </InputBoxWrapper>
    );
};

export default InputBox;
