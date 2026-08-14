import { Link } from "react-router";

function Header(){
    return(
        <>
         <header className="flex justify-between items-center px-12 py-6 sticky top-0 z-50 bg-gray-100 border-b-2 border-gray-200 mb-15">
                <h1 className="text-xl font-semibold">Koda-B9-React</h1>
                <nav>
                    <ul className="flex gap-2 list-none">
                        <li className="px-4 py-2 text-center cursor-pointer hover:bg-gray-300 rounded-lg font-medium"><Link to={"/"}>Home</Link></li>
                        <li className="px-4 py-2 text-center cursor-pointer hover:bg-gray-300 rounded-lg font-medium"><Link to={"/aritmatika"}>Aritmatika</Link></li>
                        <li className="px-4 py-2 text-center cursor-pointer hover:bg-gray-300 rounded-lg font-medium"><Link to={"/product"}>Product</Link></li>
                        <li className="px-4 py-2 text-center cursor-pointer hover:bg-gray-300 rounded-lg font-medium"><Link to={"/pokemon"}>Pokemon</Link></li>
                        <li className="px-4 py-2 text-center cursor-pointer hover:bg-gray-300 rounded-lg font-medium"><Link to={"/pokemonSP"}>PokemonSP</Link></li>
                        <li className="px-4 py-2 text-center cursor-pointer hover:bg-gray-300 rounded-lg font-medium"><Link to={"/profile"}>Profile</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;