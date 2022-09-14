import {useState} from 'react';
import RickMortyCharacter from '../components/RickMortyCharacter';

export default function RickMorty() {
    const [character, setCharacter] = useState([]);

    fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
        .then(response => response.json())
        .then(response => {
            setCharacter(response);
        });

    return (
        <div className='rick-morty'>
            {character.map(item => <RickMortyCharacter item={item} key={item['id']} />)}
        </div>
    );
}