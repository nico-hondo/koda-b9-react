import { useState, useEffect } from "react";
import { Link} from "react-router";
import useFetch from "../utils/useFetch";

function DataPokemonCH(){
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';
    const urlDetail = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;

    const {data, loading, error} = useFetch(url, urlDetail, query);

    useEffect(() =>{
        console.log("did Mount")
    }, [search])

    const handleSubmit = (e) => {
        e.preventDefault();

        setQuery(search)
    }

    console.log(error)
    console.log(data)
    return(    
        <>
            <section className="flex flex-col gap-5 ml-5 justify-center items-center text-center">
                <h2 className="text-2xl font-bold">Data Pokemon</h2>
                <div className="w-full flex justify-center items-center">
                    <form className="grid grid-cols-4 grid-row-2 gap-4" onSubmit={handleSubmit}>
                        <input type="text" name="name" value={search} id="name" className="col-span-3 border border-solid border-gray-400 rounded-md pl-3" placeholder="Find by Name" onChange={(e) => setSearch(e.target.value)}/>

                        <button type="submit" className="col-span-1 border bg-black text-gray-300 rounded-lg p-3 hover:bg-gray-600 cursor-pointer">Cari by Nama</button>

                    </form>
                </div>

                {loading && (
                    <div>
                        Sabar Loading dulu
                    </div>
                )}

                {error && (
                    <div>
                        Pokemon tidak ditemukan
                    </div>
                )}
                {!loading && !error && (
                    <div className="w-full grid grid-cols-4 gap-4">
                        {data.map((val) => {
                            return(
                                <article className="grid justify-center items-center text-center">
                                    <Link to={`/pokemon/${val.id}/${val.name}`}>
                                        <img src={val.sprites.front_default} width={180} height={180}/>
                                        <p className="text-lg text-black font-medium">{val.name}</p>
                                        <div className="flex gap-2">
                                            {val.types.map((res) =>{
                                                return(
                                                    <span className="font-semibold uppercase text-sm text-gray-800 px-5 py-3 bg-green-200 rounded-lg">
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
               ) }
            </section>
        </>
    )
}

export default DataPokemonCH;