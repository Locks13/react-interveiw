import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserDataJson(){
    // const [userJson, setUserJson] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [nextPageNumber, setNextPageNumber] = useState();

    const fetchUserData = (pageNumber: number) => {
        return axios
        .get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({data}) => {
            console.log(data);
            return data
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const getFullUserName = (userInfo) => {
        const {name: {first, last}} = userInfo;
        return `${first} ${last}`;
    }

    const fecthNextPage = () => {
        fetchUserData(nextPageNumber)
        .then( userData  => {
            if(userData === undefined) return;
            const newUserInfo = [
                ...userInfo,
                ...userData.results,
            ]
            setUserInfo(newUserInfo)
            setNextPageNumber(userData.info.page + 1);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(() => {
        fecthNextPage();
    }, [])

    return(
       <div>
            {
            /* <p>
                {userJson}
            </p> */
            }
            <p>
                {
                    userInfo?.map((userInfo, idx) => (
                        <div key={userInfo.id.value}>
                            <img src={userInfo.picture.medium} alt={getFullUserName(userInfo)} />
                            <p>                                
                                {getFullUserName(userInfo)}
                            </p>
                        </div>
                        )
                    )
                }
            </p>
            <button onClick={fecthNextPage}>
                Mais usuários
            </button>
       </div> 
    )
}