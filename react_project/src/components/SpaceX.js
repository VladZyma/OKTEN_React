export default function SpaceX(props) {
    const {item} = props;
    return (

         <div className='spaceX-cart'>
            <h3>{item['mission_name']}</h3>
            <p>Launch year: {item['launch_year']}</p>
            <img src={item['links']['mission_patch_small']}></img>
        </div>
    );
}