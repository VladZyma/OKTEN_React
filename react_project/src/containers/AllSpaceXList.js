import {useState, useEffect} from "react";
import {getSpaseXData} from "../services/spacex.api.service";

import './AllSpaceXList.css';
import SpaceX from '../components/SpaceX';

export default function AllSpaceXList() {
    const [spaseXData, setSpaceXData] = useState([]);

    useEffect(() => {
        getSpaseXData().then(response => setSpaceXData(response.data));
    }, []);

    return (
        <div className='spaceXList'>
            {spaseXData.map(item => {
                    if (+item['launch_year'] < 2020) {
                        return <SpaceX item={item} key={item['flight_number']}/>
                    }
                }
            )}
        </div>
    );
}