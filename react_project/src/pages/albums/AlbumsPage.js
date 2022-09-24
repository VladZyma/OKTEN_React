import {useState, useEffect} from 'react';

import {service} from "../../services";
import Album from '../../components/albums/Album';

function AlbumsPage() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        service.getAlbums()
            .then(response => setAlbums(response.data));
    }, []);

    return (
        <div>
            <div>
                {albums.map(item => <Album key={item.id} album={item}/>)}
            </div>
        </div>
    );
}
export default AlbumsPage;