import { useState, useEffect } from "react";
import fetchUrl from "./fetchUrl";

function useFetch(uri, detail, search){
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try{
                setIsLoading(true);
              if(search){
                // `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
                    const url = detail;
                    const result = await fetchUrl(url);
                    setData([result])
                }else{
                    const url = uri;
                    const result = await fetchUrl(url);
                    setData(result);
                }
                
            }catch(err){
                setError(err);
            }finally{
                setIsLoading(false);
            }
        })();      
    }, [search])

    return {data, loading, error}

}
export default useFetch