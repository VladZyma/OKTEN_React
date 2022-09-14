import './Simpson.css';

export default function Simpson(props) {
    let {item:simpson} = props;

    return (
        <div className='simpson'>
            <h2>{simpson['name']} {simpson['surname']}</h2>
            <p>age: {simpson['age']}</p>
            <img src={simpson['photo']} alt={simpson['name']}/>
            <p>{simpson['info']}</p>
        </div>
    );
}