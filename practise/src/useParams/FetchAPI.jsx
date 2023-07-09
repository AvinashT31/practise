import React, { useEffect, useState } from 'react'
import '../Style/Fetchapi.css';
import { useNavigate } from 'react-router-dom';

const FetchAPI = () => {

    const [fetchapi, setfetchapi] = useState();
    console.log(fetchapi, "fetchapi");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => setfetchapi(json))
    })

    const route = useNavigate();

    const opennewpage = (e) => {
        route(`/${e.id}`);
    }
    return (
        <div className='fullpage'>
            {fetchapi && fetchapi.map((e, i) => (
                <div onClick={() => opennewpage(e)} className='fetchpage'>
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

export default FetchAPI