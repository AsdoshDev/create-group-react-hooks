import { useState, useEffect } from 'react';

export const useFetch = (url, opts, callback) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        const doFetch = async () => {
            console.log("doFetch -> doFetch")

            setLoading(true)
            const res = await fetch(url, opts, callback);
            console.log(res);
            if (res) {
                const json = await res.json();
                setResponse(json)
                callback(json);
                setLoading(false)
            }
            // fetch(url, opts)
            //     .then((res) => {Vd@oct2020

            //         debugger;
            //         setResponse(res)
            //         setLoading(false)
            //     })
            //     .catch(() => {
            //         setHasError(true)
            //         setLoading(false)
            //     })
        }
        doFetch();
    }, [])
    return { response, loading, hasError }
}