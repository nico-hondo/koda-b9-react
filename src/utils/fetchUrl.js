async function fetchUrl(urlFetch){
    const res = await fetch(urlFetch)
    if(!res.ok) throw new Error(res.status);
    
    const data = await res.json();

    if(data.results){    
        const detailPokemon = await Promise.all(
            data.results.map(async(pokemon) => {
                const res = await fetch(pokemon.url);

                if(!res.ok){
                    throw new Error(res.status);
                }
                return await res.json();
            })
        );
        return detailPokemon;
    }
    return data
}

export default fetchUrl;