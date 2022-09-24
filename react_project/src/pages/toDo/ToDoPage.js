import {useState, useEffect} from 'react';

import {service} from "../../services";
import ToDo from '../../components/toDo/ToDo';

function ToDoPage() {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        service.getToDo()
            .then(response => setToDos(response.data));
    }, []);

    return (
        <div>
            <div>
                {toDos.map(item => <ToDo key={item.id} toDo={item}/>)}
            </div>
        </div>
    );
}
export default ToDoPage;