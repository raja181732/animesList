import { useEffect, useState } from "react";
import AnimeList from "./AnimeList";
import useFetch from "./UseFetch";

const WishList = () => {

    let {data:animes, error, pending} = useFetch("https://api.jikan.moe/v4/anime")
    let [wish, setwish] = useState(null)

    useEffect(()=>{

        
        let wish=localStorage.getItem("wish");
        wish=JSON.parse(wish);
        setwish(wish)
     
    },[])


    return ( 
        <div>
            {error && <h1>{error}</h1>}

            {pending && <h1>Loading.......</h1>}

            {animes && <AnimeList animes={animes.filter((anime)=>{ return wish.includes(anime.mal_id) })}/>}

        </div>
     );
}
export default WishList;