import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <p>{error.data}</p>
            <h1>
                {error.status}
            </h1>
        </div>
    )
}

export default Error
