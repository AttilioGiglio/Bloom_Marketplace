import React, { Fragment, useEffect, useState } from 'react';
import NavBar from '../../components/navbar'
import Card from './card'

const ListaCards = () => {

    //  Saving data from plants API
    const [products, setProducts] = useState({});

    // Gettting data from plant API
    const getFetch = async () => {
        const imagesPerPag = 10;
        const key = 'ONPwtsyxzijK61Eg1wQHBPmw_WuEh5woK9-BifDHQ30';
        const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=${key}&page=${imagesPerPag}`
        const req = await fetch(url)
        const res = await req.json()
        setProducts(res.data)
    }

    // 
    useEffect(() => {

        getFetch()
    }, [])

    return (
        <Fragment>
            <NavBar />
            <div className='row justify-content-center'>
                    {
                        (products!= null && products.length > 0)
                            ?
                            products.map((item, index) => (
                                <Card key={item.id} common_name={item.common_name} img={item.image_url}/>
                            ))
                            :
                            null
                    }
                </div>
        </Fragment>

    )
}

export default ListaCards
