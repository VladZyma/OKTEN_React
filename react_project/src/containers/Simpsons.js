import {simpsons} from "../data/simpsons";
import Simpson from '../components/Simpson';

export default function Simpsons() {
    const simpsonsArr = simpsons;

    return (
        <div className='simpsons'>
            {simpsonsArr.map((item, index) => <Simpson item={item} key={(index + 1)}/>)}
        </div>
    );
}