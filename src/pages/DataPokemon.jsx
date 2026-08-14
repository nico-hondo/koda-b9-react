import { useState, useEffect } from "react";
import fetchUrl from "../utils/fetchUrl";
import { Link} from "react-router";

function DataPokemon(){
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        (async () => {
            try{
                setIsLoading(true);
                if(search){
                    const url = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;
                    const result = await fetchUrl(url);
                    setData([result])
                }else{
                    const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
                    const result = await fetchUrl(url);
                    setData(result);
                }
            }catch(err){
                console.error(err);
            }finally{
                setIsLoading(false);
            }
        })();
    }, [search])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    if(isLoading) return <div></div>
    return(    
        <>
            <section className="flex flex-col gap-5 ml-5 justify-center items-center text-center">
                <h2 className="text-2xl font-bold">Data Pokemon</h2>
                <div className="flex justify-center items-center">
                    <form className="flex gap-4" onSubmit={handleSubmit}>
                        <input type="text" name="name" value={search} id="name" className="border border-solid border-gray-400 rounded-md pl-3" placeholder="Find by Name" onChange={(e) => setSearch(e.target.value)}/>

                        <button type="submit" className="border bg-black text-gray-300 rounded-lg p-3 hover:bg-gray-600 cursor-pointer">Cari by Nama</button>
                    </form>
                </div>
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
            </section>
        </>
    )
}

export default DataPokemon;