import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const AnimeList = ({animes}) => {

    const [wish, setwish] = useState([])

    useEffect(()=>{
        if(localStorage.getItem("wish")==null){   // if wish array is not present before
            localStorage.setItem("wish", "[]");     // then only you add wish array
        }
    },[])

    let handleWish = (id)=>{
        let x = localStorage.getItem("wish");
        x=JSON.parse(x);
        if(x.includes(id) === false)
        {
            x.push(id);
            x=JSON.stringify(x)
            localStorage.setItem("wish",x)
            alert("Added to Wish List")
            console.log(x);
        }else{
            let index=x.indexOf(id);
            x.splice(index,1);
            x=JSON.stringify(x)
            localStorage.setItem("wish",x)
            alert("Removed from Wish List")
            console.log(x);
        }
    }

    return ( 
        <div className="animes-list d-gride justify-content-center" >
            { 
        animes.map((anime)=>{
            return(
                    <div key={anime.mal_id} className = "anime" >
                        <h1><img src={anime.images.jpg.small_image_url} alt="poster not found" /></h1>
                        <h1>Name : {anime.title}</h1>
                        <h2>Year : {anime.aired.prop.from.year}</h2>
                        <h2>Ratings : {anime.score}</h2>
                        <button onClick={()=>{ handleWish(anime.mal_id) }}>&#10084;</button>
                       
                    </div>
                
                
            )
        })
    }
        </div>
     );
}
 
export default AnimeList;