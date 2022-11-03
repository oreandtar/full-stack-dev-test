import React from "react"
import { useGetAllProductsQuery } from "../features/productsApi"

const Home = (props) => {

   const { data, error, isLoading } = useGetAllProductsQuery();
    console.log(data);
    return (
        <div className="container">
            {
                isLoading ? <p>Loading...</p> : 
                error ? <p>An error occured {error.data} </p> :
                <>
                    <h2>Products</h2>
                    <div className="products">
                        {
                            data.map(product => <div key={product.id}>
                                <img src={product.image} alt="" />
                                <h3>{product.name}</h3>
                                <p>{product.brand}</p>
                                <h4>${product.price}</h4>
                            </div>)
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Home
