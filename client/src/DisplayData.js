import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";

const QUERY_ALL_USERS = gql`
  query Users {
    users {
      id
      name
      age
      nationality
      username
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
   query Movies{
  movies {
    id,
    name,
    isInTheaters,
    yearOfPublication
  }
}
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
  movie(name: $name) {
     id,
     name,
     isInTheaters,
     yearOfPublication  
  }
}
`;

const DisplayData = () => {

    const [searchedMovie,setSearchedMovie] = useState('');

  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, {data: searchedMovieData,loading:movieSearchLoading,error: movieSearchedError}] = useLazyQuery(
    GET_MOVIE_BY_NAME
    );


  if(loading){
    return(
        <h3>Data is loading.......</h3>
    )
  }

  if(error){
    console.log(`Error found ${error}`)
  }

  return (
    <div className="wrapper">
        <div className="userCardsContainer">
      {data && data.movies.map((movie)=> (
        <div className="userCard">
            <span>Name: {movie.name}</span>
            <span>isInTheaters: {movie.isInTheaters}</span>
            <span>yearOfPublication: {movie.yearOfPublication}</span>
        </div>
      ))}

    </div>
    <div>
        <input type="text" placeholder="inception......" onChange={(e)=>{setSearchedMovie(e.target.value)}} />
        <button onClick={()=>{
            fetchMovie({
                variables:{
                    name: searchedMovie
                }
            })
        }}>Fetch Data</button>

        <div>
            {searchedMovieData && (
                <div>
                    <span>Movie name: {searchedMovieData.name}</span>
                    <span>isInTheaters: {searchedMovieData.isInTheaters}</span>
                    <span>yearOfPublication: {searchedMovieData.yearOfPublication}</span>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
