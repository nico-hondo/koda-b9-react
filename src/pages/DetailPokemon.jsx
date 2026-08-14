import { useEffect, useState} from 'react';
import fetchUrl from "../utils/fetchUrl";
import { useParams } from 'react-router';

function DetailPokemon() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); //buat isLoading biar ga crash pas data masih null
    const params = useParams();
    console.log(params.id);

    useEffect(() =>{
        (async () => {
            try{
                setIsLoading(true);
                const url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
                const result = await fetchUrl(url);
                setData(result)
            }catch(err){
                console.error(err);
            }finally{
                setIsLoading(false);
            }
        })();
    }, [params.id])

    if(isLoading) return <div className="text-center mt-10">Loading...</div> // Tahan dulu

    if(!data) return <div className="text-center mt-10">Pokemon tidak ditemukan</div> // Kalau gagal
    // console.log(data)
  return (
     <>
        <section className="ml-5 flex flex-col justify-center items-center gap-10">
            <h2 className="text-2xl font-bold">Detail Pokemon</h2>
                <article className="flex flex-col justify-center items-center text-center gap-2">
                    <img src={data.sprites.front_default} width={180} height={180}/>
                    <p className="text-lg text-black font-medium uppercase">{data.name}</p>
                    <div className="flex gap-2">
                        {data.abilities.map((res) =>{
                            return(
                                <span key={res.ability.name} className="font-semibold uppercase text-sm text-gray-800 px-5 py-3 bg-green-200 rounded-lg">
                                    {res.ability.name}
                                </span>
                            )
                        })}
                    </div>
                </article>
        </section>
    </>
  )
}

export default DetailPokemon