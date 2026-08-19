import { useState, useContext } from "react";
import Review from "../components/Review";

import themeContext from "../utils/themeContext";
/**
 * 
 * @typedef {Object} ReviewProps
 * @property
 */

function Home(){
    const [review, setReview] = useState(JSON.parse(localStorage.getItem('ulasan')) || []);

    // const getReview = JSON.parse(localStorage.getItem('ulasan'));
    // console.log(getReview);

    console.log(review);
    
    const {theme, toogleTheme} = useContext(themeContext);
    return(
        <>
        <div className="w-full relative">
            <span className="bg-blue-600 text-gray-100 px-5 py-2 rounded-lg absolute right-0 cursor-pointer"
                onClick ={() => toogleTheme()}
            >Ubah Theme</span>
        </div>
        <main className="w-full flex flex-col gap-10 justify-center items-center">
            <Review getReview={setReview}/>
            <section className="max-w-xl flex-1 grid grid-cols-2 gap-5">
                {review.map((val, idx) => {
                    return(
                        <article key={idx} className="bg-gray-100 p-5 border-2 border-gray-200 rounded-lg grid gap-2">
                            <span className={`text-xs font-medium ${theme === 'light' ? 'bg-orange-300' : 'bg-blue-500'} border border-amber-300 px-4 py-1 rounded-lg w-fit`}>{val.nama}</span>
                            <p className="text-sm/6 text-gray-500">{val.ulas}</p>
                        </article>
                    )
                })}
            </section>
        </main>
        </>
    )
}

export default Home;