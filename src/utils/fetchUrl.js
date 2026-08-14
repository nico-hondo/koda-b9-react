/**
 * Fetch data from the URL and retrieve Pokemon details when the results are available.
 * @param {string} urlFetch Url for fetch data
 * @returns {Promise<Object|Array>} a promise that resolves to the fetched JSON data or an array containing Pokémon data details.
 * promise yang menghasilkan data berbentuk JSON yang telah diambil atau sebuah array yang berisi detail data Pokemon.
 * @throws {Error} given the error result if HTTP res is not works
 */

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