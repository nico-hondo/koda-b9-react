import { useState } from 'react';

function DataProduct(){
    const [data, setData] = useState(["Given", "Melvin"])

    const addToArray = (newItem) => {
        setData((stateBefore) => [...stateBefore, newItem])
    }
    return(
        <>
            <ViewData sentData={data}/>
            <SetTableData updateData={addToArray} />
        </>
    )
}

function ViewData({ sentData }){
    return(
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {sentData.map((val, idx) => {
                    return(
                        <tr>
                            <td>{idx+1}</td>
                            <td>{val}</td>
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
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Masukkan Username'/>
                <button type='submit'>Tambah</button>
            </form>
        </>
    )
}

export default DataProduct;