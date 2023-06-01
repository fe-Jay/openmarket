import React from 'react';
import useFetch from '../../Hook/useFetch';

const FetchComponent = ({ url, children }) => {
    const fetchUrl = 'https://openmarket.weniv.co.kr/' + url;
    const { loading, data, error } = useFetch(fetchUrl);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.message}</div>;

    return children(data);
};

export default FetchComponent;
