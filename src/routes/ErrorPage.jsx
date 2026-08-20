import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    console.error(error);

    return (
        <div>
            <h1>Oppss... 😕</h1>
            <h2>{error?.message}</h2>
        </div>
    );
};

export default ErrorPage;