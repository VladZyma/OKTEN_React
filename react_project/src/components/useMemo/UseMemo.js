import {useState} from 'react';
import {useMemo} from "react";

const summator = (n) => {
    console.log('start');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += n;
    }
    console.log('finish');

    return sum;
}


const UseMemo = () => {

    const [n, setN] = useState(5);
    const [counter, setCount] = useState(0);
    // const number = summator(n);

    //useMemo запоминает результат выполнения фу-и summator(n) и не запускает ее пока не изменится n
    const number = useMemo(() => {
        return summator(n);
    }, [n]);

    return (
        <div>
           <h2>sum : {number}</h2>
           <h2>counter : {counter}</h2>
            <button onClick={() => setN(prev => prev + 1)}>incN</button>
            <button onClick={() => setCount(prev => prev + 1)}>incCount</button>
        </div>
    );
}

export {UseMemo}