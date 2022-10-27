import {carService} from "../../services";

const Car = (props) => {

    const {car: {id, model, price, year, photo}, setCars, deleteCar, updateCar} = props;

    async function sendPhoto(event) {
        console.log(event);
        const formData = new FormData();
        formData.append('photo', event.target.files[0]);

        try {
            const {data} = await carService.addPhotoById(id, formData);
            setCars(cars => {
                const foundCar = cars.find(car => car.id === id);
                Object.assign(foundCar, {...data, photo: URL.createObjectURL(event.target.files[0])});
                return [...cars];
            });
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
           <p>ID : {id}</p>
           <p>Model : {model}</p>
           <p>Price : {price}</p>
           <p>Year : {year}</p>
            <div style={{width: '300px'}}>
                {photo ?
                    <img style={{width: '100%'}} src={photo} alt={model}/>
                    :
                    <input type={'file'} onChange={sendPhoto}/>
                }
            </div>
            <button onClick={() => deleteCar(id)}>delete</button>
            <button onClick={() => updateCar(id)}>update</button>
            <hr/>
        </div>
    );
}

export {Car}