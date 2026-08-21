import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeFromSurvei, submitToForm } from "../redux/slice/FormSlices";
import { MdOutlineDelete } from "react-icons/md";

function SurveyPenonton() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.formState);
    const [genres, setGenres] = useState([]);

    const handleGenreChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setGenres([...genres, value]);
        } else {
            setGenres(genres.filter(val => val !== value));
        }
    }
    return (
        <>
            <main className="w-full min-h-100 flex justify-center items-center gap-4">
                <section className="w-full flex-1 flex flex-col gap-5 justify-center items-center p-5">
                    <h2 className="text-2xl font-semibold text-gray-900">Form Survey</h2>
                    <form className="w-full max-w-3xl flex flex-col gap-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.name.value
                            const age = e.target.age.value
                            const gender = e.target.gender.value
                            const hobi = e.target.hobi.value

                            dispatch(
                                submitToForm({
                                    name: name,
                                    age: age,
                                    gender: gender,
                                    hobi: hobi,
                                    genres,
                                })
                            );

                            e.target.reset();
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <label for="name">Nama</label><br/>
                            <input className="border border-gray-200 p-3 text-xs rounded-lg w-full" type="text" placeholder="Masukkan Nama anda" name="nama" id="name"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <label for="age">Umur</label><br/>
                            <input type="text" name="age" placeholder="Masukkan Umur anda" id="age" className="border border-gray-200 p-3 text-xs rounded-lg w-full"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Jenis Kelamin :</p>
                            <input type="radio" id="laki" name="gender" value="Pria"/>
                            <label for="laki">Pria</label>
                            <input type="radio" id="cewek" name="gender" value="Wanita"/>
                            <label for="cewek">Wanita</label>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <label for="genre">Hobi Nonton? :</label>
                            <select name="hobi" id="genre" defaultValue="" required className="border border-gray-200 p-3 text-xs rounded-lg w-full">
                                <option value="" disabled selected>- Berikan Pilihan -</option>
                                <option value="Ya">Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Genre Film yang anda sukai :</p>
                            <div className="grid grid-rows-5 grid-cols-2 gap-2">
                                {['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-fi', 'Thriller', 'Fantasi', 'Animasi', 'Petualangan'].map(val => (
                                    <div key={val} className="flex items-center gap-2">
                                        <input type="checkbox" id={val} value={val} onChange={handleGenreChange}/>
                                        <label htmlFor={val}>{val}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button type="submit" className="bg-orange-600 px-5 py-1.5 rounded-lg w-fit text-gray-100 cursor-pointer">Submit</button>
                    </form>
                </section>
                <section className="w-full flex-1 flex flex-col gap-5 text-center justify-center">
                    <h2 className="text-2xl font-semibold text-gray-900">Data Survey</h2>
                    <table className="border border-gray-200 ">
                        <thead>
                            <tr bgcolor="aquamarine">
                                <th scope="col">Nama</th>
                                <th scope="col">Umur</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Hobi</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.form.length === 0 ? (
                                <p>Form Kosong</p>
                            )
                            :
                            (
                                state.form.map((survey, idx) => {
                                    return(
                                        <tr key={idx} className="text-sm text-gray-700 h-10 border-b border-gray-300 ">
                                            <td>{survey.name}</td>
                                            <td>{survey.age}</td>
                                            <td>{survey.gender}</td>
                                            <td>{survey.hobi}</td>
                                            <td>
                                                {survey.genres.join(", ")}
                                            </td>
                                            <td className="h-full flex justify-center items-center relative"
                                            ><MdOutlineDelete className="text-lg cursor-pointer absolute left-7 top-3" 
                                                onClick={() => {
                                                    dispatch(removeFromSurvei({id: survey.id}))
                                                }}
                                            /></td>
                                        </tr>
                                    )
                                })
                            )
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}

export default SurveyPenonton