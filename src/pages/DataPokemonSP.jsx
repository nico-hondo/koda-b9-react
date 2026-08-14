import { useState, useEffect } from "react";
import fetchUrl from "../utils/fetchUrl";
import { Link, useSearchParams } from "react-router";

function DataPokemonSP(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("q") || ""; // buat search nama
    const type = searchParams.get("type") || ""; // buat search type

    useEffect(() =>{
        const getData = async () => {
            try{
                setIsLoading(true);

                if(type){ // 1. KALAU FILTER BY TYPE
                    const url = `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`;
                    const result = await fetchUrl(url); // result.pokemon = [{pokemon: {name, url}},...]

                    // Ambil detail 20 pokemon pertama dari type itu
                    const pokemonUrls = result.pokemon.slice(0, 20).map(poke => poke.pokemon.url);
                    const pokemonDetails = await Promise.all(
                        pokemonUrls.map(url => fetchUrl(url))
                    );
                    setData(pokemonDetails);

                } else if(search){ // 2. KALAU SEARCH BY NAMA
                    const url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;
                    const result = await fetchUrl(url);
                    setData([result])

                } else { // 3. DEFAULT 30 POKEMON
                    const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
                    const list = await fetchUrl(url);
                    const details = await Promise.all(
                        list.map(p => fetchUrl(p.url))
                    );
                    setData(details);
                }

            }catch(err){
                console.error(err);
                setData([]);
            }finally{
                setIsLoading(false);
            }
        };
        getData();
    }, [search, type])

    const handleChange = (e) => {
        const value = e.target.value;
        if(value){
            setSearchParams({ q: value })
        } else {
            setSearchParams({})
        }
    }

    const handleTypeClick = (typeName) => {
        setSearchParams({ type: typeName.toLowerCase() }) // klik grass ->?type=grass
    }

    if(isLoading) return <div className="text-center">Loading...</div>

    return(
        <section className="flex flex-col gap-5 ml-5 justify-center items-center text-center">
            <h2 className="text-2xl font-bold">Data Pokemon</h2>

            <form className="grid grid-cols-4 gap-4 w-full max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={search}
                    className="col-span-3 border border-gray-400 rounded-md pl-3 p-2"
                    placeholder="Find by Name"
                    onChange={handleChange}
                />
                <button type="submit" className="col-span-1 bg-black text-gray-300 rounded-lg p-3 hover:bg-gray-600">
                    Cari
                </button>

                {/* TOMBOL TYPE */}
                <div className="flex flex-wrap gap-2 col-span-4 justify-center">
                    {["grass", "poison", "fire", "water", "bug", "normal", "flying", "electric", "ground"].map(t => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => handleTypeClick(t)}
                            className={`px-4 py-1 rounded-lg capitalize ${type === t? 'bg-black text-white' : 'bg-gray-200'} cursor-pointer`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </form>

            <div className="w-full grid grid-cols-4 gap-2">
                {data.map((val) => {
                    return(
                        <article key={val.id} className="grid justify-center items-center text-center p-4 rounded-lg">
                            <Link to={`/pokemon/${val.id}/${val.name}`}>
                                <img src={val.sprites.front_default} width={180} height={180}/>
                                <p className="text-lg text-black font-medium capitalize">{val.name}</p>
                                <div className="flex gap-2 justify-center">
                                    {val.types.map((res) =>{
                                        return(
                                            <span key={res.type.name} className="font-semibold uppercase text-sm px-3 py-1 bg-green-200 rounded-lg">
                                                {res.type.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </Link>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default DataPokemonSP;