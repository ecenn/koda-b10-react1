function BodyRow() {
    const x = window.localStorage.getItem("respondent")
    const data = JSON.parse(x)
    console.log(data)
    return data.map(user => {
        return (
            <tr>
                {
                    ["nama", "umur", "gender", "smoke", "cigs"].map(key => {
                        return <td>{user[key]}</td>
                    })
                }
            </tr>
        )
    })
}

function Table() {
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <table className="font-sans w-1/3 border-collapse [&_th]:px-3 [&_th]:py-2 [&_td]:p-2 border">
                    <thead className="bg-blue-600 text-white">
                        <tr className="border border-black">
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Jenis Kelamin</th>
                            <th>Perokok</th>
                            <th>Jenis Rokok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BodyRow()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table