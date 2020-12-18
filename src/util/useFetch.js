import { useState, useEffect } from 'react';

export const useFetch = (url, opts, callback) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        const doFetch = async () => {
            try {
                setLoading(true)
                const res = await fetch(url, opts, callback);
                if (res) {
                    const json = await res.json();
                    setResponse(json)
                    callback(json);
                    setLoading(false)
                }
            }
            catch (err) {
                setHasError(true)
                setLoading(false)
            }
        }
        doFetch();
    }, [])
    return { response, loading, hasError }
}