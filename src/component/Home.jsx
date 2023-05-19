import AnimeList from "./AnimeList";
import useFetch from "./UseFetch";

const Home = () => {
    
    let {data:animes, pending, error} = useFetch("https://api.jikan.moe/v4/anime")

    return ( 
        <div>
            
        <h1>Anime List</h1>

        {error && <h1>{error}</h1>}

        {pending && <h1>Loading.......</h1>}

        {animes && <AnimeList animes={animes}/>}

        </div>
        
        
     );
}
 
export default Home;