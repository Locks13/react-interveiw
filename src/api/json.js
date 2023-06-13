import { useEffect, useState } from "react";
// interface Data {
//   name: string
//   website: string
//   email: string
//   country: [{
//     id: string
//     name: string
//   }]
// }
export const UsersDetails = () =>{
    const [data, setData] = useState()
    const fetchJson = () => {
    fetch('https://randomuser.me/api')
    .then(response => {
        return response.json();
    }).then(data => {
        setData(data);
    }).catch((e: Error) => {
        console.log(e.message);
    });
    }
    useEffect(() => {
        fetchJson()
    },[])

    return(
        <>
            <div>
                <div>Name : {data?.name}</div>
                <div>Email : {data?.email}</div>
                <div>Website : {data?.website}</div>
                <div><label>Country :</label>
                <select>
                {data?.country?.map((country) => {
                    return <option key={country.id} value={country.id}>{country.name}</option>
                })}
                </select>
                </div>
            </div>
        </>
    )
}