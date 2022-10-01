
import {Cat, CatForm} from '../../components'
import {useCatReducer} from "../../reducers";


const Cats = () => {
    let [state, dispatch] = useCatReducer();


    function onSubmit(cat) {
        dispatch({type: 'add', payload: cat.cat});
    }
    function deleteHandler(index) {
        dispatch({type: 'delete', index})
    }

    return (
        <div>
            <div>
                <CatForm onSubmit={onSubmit}/>

            </div>
            <div>
                {state && state.map((cat, index) => <Cat key={index + 1} cat={cat} index={index} deleteHandler={deleteHandler}/>)}
            </div>
        </div>
    );
}
export {Cats}