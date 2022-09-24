import css from './album.module.css';


function Album(props) {
    const {album} = props;

    return (
        <div className={css.Album}>
            <h4>User: {album.userId}</h4>
            <p>Album {album.id} : {album.title}</p>
        </div>
    );
}
export default Album;