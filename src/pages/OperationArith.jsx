import { useState } from 'react';

function OperationArith(){
    const [count, setCount] = useState(0);

    return(
        <>
            <main className="w-full flex justify-center items-center">
                <section className="max-w-xl min-h-100 flex flex-col gap-7 text-black mt-4 text-center">
                    <h1 className="text-2xl font-semibold">Operasi Aritmatika</h1>
                    <div className="grid gap-3">
                        <p className="font-semibold text-2xl">{count}</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    if(count >= 10){
                                        return;
                                    }
                                    setCount(stateBefore => stateBefore + 1)
                                }}
                            className="bg-black text-white font-semibold rounded-xl p-3 cursor-pointer">Increase Num</button>
                            <button
                                onClick={() => {
                                    if(count <= 0){
                                        return;
                                    }
                                    setCount(stateBefore => stateBefore - 1)
                                }}
                            className="border-2 border-gray-600 rounded-xl font-semibold p-3 cursor-pointer">Decrease Num</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default OperationArith;