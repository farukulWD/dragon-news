import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../newsCart/NewsCart';

const Category = () => {
    const {id}=useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            { id && <h2>This is category New are : {categoryNews.length}</h2>}
            {
                categoryNews.map(news=><NewsCart
                key={news._id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;