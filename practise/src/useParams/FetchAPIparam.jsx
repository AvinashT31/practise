import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const FetchAPIparam = () => {

    const [fetchdata, setfetchdata] = useState();
    console.log(fetchdata, "fetchdata");

    const Data = useParams()
    console.log(Data.id, "gello");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => json.filter(obj => obj.id === +Data.id))
            .then(Data => setfetchdata(Data))
    })

    return (
        <div className='fullpage'>
            {fetchdata && fetchdata.map((e, i) => (
                <div className='fetchpage'>
                    <div className='fetchimg'>
                        <img src={e.image} alt="" />
                    </div>
                    <p>{e.category}</p>
                    <p>{e.price}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchAPIparam
