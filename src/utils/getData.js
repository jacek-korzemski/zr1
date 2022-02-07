const init_api_url = process.env.REACT_APP_INIT_API_URL;
const project_api_url = process.env.REACT_APP_PROJECT_API_URL;
const authority = process.env.REACT_APP_AUTHORITY;

const config = {
    method: "GET",
    authority: authority,
};

export async function getData(project) {
    return fetch(project_api_url + "/" + project, config)
        .then((res) => {
            if (!res.ok) {
                throw handleError(res.status);
            }
            return res;
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
}

export async function init() {
    return fetch(init_api_url, config)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            throw err;
        });
}

export function handleError(error) {
    const errorObject = { error: true };
    if (error === 500) {
        errorObject.name = "Error 500";
        errorObject.message = "A server error has occured - status 500";
    }
    if (error === 404) {
        errorObject.name = "Error 404";
        errorObject.message =
            "We couldn't find the Project ID that you are looking for. Try another one, or leave ID input empty for random ID.";
    }
    if (error === 1) {
        errorObject.name = "Invalid project id";
        errorObject.message = "Invalid project id";
    }
    return errorObject;
}
