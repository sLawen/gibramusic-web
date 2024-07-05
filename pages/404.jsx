import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'As-tu perdu ton chemin, gamin?',
        'Merde! Cette route sans issue.',
        'Les Aurors ont bloqué cette route, Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

