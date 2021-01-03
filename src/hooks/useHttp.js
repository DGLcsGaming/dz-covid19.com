import {useState, useEffect} from 'react';
import axios from 'axios';

export const useHttp = (url, dependencies ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        console.log("Sending Http Request!");
        axios
            .get(url)
            .then(res => res.data)
            .then(data => {
                setIsLoading(false);
                if (!data.error) {
                    setFetchedData(data.data);
                } else {
                    console.log(data.error);
                }
            }).catch(err => {
                console.log("useHttp Error: "+err);
                setIsLoading(false);
            });
    }, dependencies);

    return [isLoading, fetchedData, setFetchedData];
};

