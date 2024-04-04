import { useQuery, gql } from "@apollo/client";

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

const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);


  if(loading){
    return(
        <h3>Data is loading.......</h3>
    )
  }
  if (data) {
    console.log("data ====> ", data);
  }

  if(error){
    console.log(`Error found ${error}`)
  }
  return (
    <div className="userCardsContainer">
      {data && data.movies.map((movie)=> (
        <div className="userCard">
            <span>Name: {movie.name}</span>
            <span>isInTheaters: {movie.isInTheaters}</span>
            <span>yearOfPublication: {movie.yearOfPublication}</span>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
