/**
 * 
 * @param {Dispatch<Set>} props 
 * @returns 
 */

function Review({getReview}){
    return(
        <section className="w-full flex-1 flex justify-center items-center">
            <div className="max-w-xl flex-1 grid gap-10 text-center">
                <p className="text-2xl font-bold">Review</p>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        const nama = e.target.nama.value;
                        const ulas = e.target.ulasan.value;

                        const objUlasan = {nama, ulas}; //simpan kedalam object, sehingga nantinya object didalam array datanya

                        const localUlasan = JSON.parse(localStorage.getItem("ulasan"));

                        if(!localUlasan){
                            localStorage.setItem("ulasan", JSON.stringify([objUlasan]));
                            getReview([objUlasan]); //using props
                        }else{
                            const addUlasan = [...localUlasan, objUlasan];
                            getReview(addUlasan)

                            localStorage.setItem("ulasan", JSON.stringify(addUlasan));
                            // console.log(getReview)
                        }

                        e.target.nama.value = "";
                        e.target.ulasan.value = "";
                    }}
                
                className="flex flex-col gap-3">
                    <input type="text" name="nama" className="p-2 rounded-lg border border-gray-300" placeholder="Masukkan Nama"></input>
                    <textarea name="ulasan" className="p-2 rounded-lg border border-gray-300 h-32" placeholder="Masukkan Ulasan anda"></textarea>
                    <button type="submit" className="bg-black rounded-lg text-white px-4 py-2 cursor-pointer">Kirim</button>
                </form>
            </div>
        </section>
    )
}
export default Review;