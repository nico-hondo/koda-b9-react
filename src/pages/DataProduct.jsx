import { useState } from 'react';

function DataProduct(){
    const [data, setData] = useState(["Given", "Melvin"])

    const addToArray = (newItem) => {
        setData((stateBefore) => [...stateBefore, newItem])
    }
    return(
        <>
            <main className='w-full min-h-90 flex flex-col gap-5 items-center'>
                <ViewData sentData={data}/>
                <SetTableData updateData={addToArray} />
            </main>
        </>
    )
}

function ViewData({ sentData }){
    return(
        <table className="border">
            <thead className="border">
                <tr>
                    <th className="border p-3">No.</th>
                    <th className='p-3'>Username</th>
                </tr>
            </thead>
            <tbody className="border">
                {sentData.map((val, idx) => {
                    return(
                        <tr>
                            <td className="border p-3">{idx+1}</td>
                            <td className="border p-3">{val}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function SetTableData({updateData}){
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(input);
        e.target.username.value = "";
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="flex gap-5">
                <input type="text" name="username" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Masukkan Username' className="border border-gray-200 rounded-lg p-3"/>
                <button type='submit' className="bg-black px-5 py-2 rounded-lg text-white">Tambah</button>
            </form>
        </>
    )
}

export default DataProduct;