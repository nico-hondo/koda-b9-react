import { useState } from 'react';

function OperationArith(){
    const [count, setCount] = useState(0);

    return(
        <>
            <section className="max-w-4xl w-full grid gap-3 text-black mt-4">
                <h1 className="text-2xl font-semibold">Operasi Aritmatika</h1>
                <div className="grid gap-1">
                    <p className="font-semibold text-lg">Hasil Hitung: {count}</p>
                    <div className="flex gap-2">
                        <span
                            onClick={() => {
                                if(count >= 10){
                                    return;
                                }
                                setCount(stateBefore => stateBefore + 1)
                            }}
                        className="bg-black text-white font-semibold rounded-xl p-3 cursor-pointer">Increase Num</span>
                        <span
                            onClick={() => {
                                if(count <= 0){
                                    return;
                                }
                                setCount(stateBefore => stateBefore - 1)
                            }}
                        className="border-2 border-gray-600 rounded-xl font-semibold p-3 cursor-pointer">Decrease Num</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OperationArith;