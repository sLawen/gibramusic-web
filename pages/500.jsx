import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Il semble qu’il y ait une erreur de serveur interne 500. Veuillez réessayer plus tard !"} />
}

export default UnkownPage;