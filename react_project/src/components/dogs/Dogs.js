import {Dog, DogForm} from "../../components";
import {useDogReducer} from "../../reducers";

const Dogs = () => {
    let [state, dispatch] = useDogReducer();

    function onSubmit(dog) {
        console.log(dog.dog);
        dispatch({type: 'add', payload: dog.dog});
    }

    function deleteHandler(index) {
        dispatch({type: 'delete', index});
    }

    return (
        <div>
            <div>
                <DogForm onSubmit={onSubmit}/>
            </div>
            <div>
                {state && state.map((dog, index) => <Dog key={index + 1} dog={dog} index={index} deleteHandler={deleteHandler}/>)}
            </div>
        </div>
    );
}
export {Dogs}