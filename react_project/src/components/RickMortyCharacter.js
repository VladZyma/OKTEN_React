export default function RickMortyCharacter(props) {
    const {item: character} = props;

    return (
        <div>
            <h1>{character['id']} {character['name']}</h1>
            <img src={character['image']} alt={character['name']}/>
            <ul>
                <li>Status: {character['status']}</li>
                <li>Gender: {character['gender']}</li>
                <li>Species: {character['species']}</li>
            </ul>
        </div>
    );
}