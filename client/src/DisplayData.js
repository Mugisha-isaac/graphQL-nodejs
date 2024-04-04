import { useQuery, useLazyQuery, useMutation, gql } from "@apollo/client";
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
    id
    name
    isInTheaters
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

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input:CreateUserInput!){
        createUser(input:$input){
            id,
            name,
            username,
            nationality
        }
    }
`;


const DELETE_USER_MUTATION = gql`
   mutation DeleteUser($id:ID!){
    deleteUser(id:$id){
        id,
        name,
        username,
        age,
        nationality
    }
   }
`;

const UPDATE_USER = gql`
   mutation UpdateUser($input: updateUserInput!){
    updateUser(input:$input){
        id,
        name,
        age,
        username,
        nationality
    }
   }
`;

const DisplayData = () => {

    const [searchedMovie,setSearchedMovie] = useState('');
    const [newUser,setNewUser] = useState({
        name: '',
        age: 0,
        username: '',
    })

  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
  const [fetchMovie, {data: searchedMovieData,loading:movieSearchLoading,error: movieSearchedError}] = useLazyQuery(
    GET_MOVIE_BY_NAME
    );

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);
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
      {data && data.users.map((user)=> (
        <div className="userCard">
            <span>Name: {user.name}</span>
            <span>age: {user.age}</span>
            <span>username: {user.username}</span>
            <div>
            <button onClick={()=>{
                deleteUser({
                    variables:{
                        id: user.id
                    }
                });

                refetch();
            }}>Delete</button>

            <button>Update</button>
            </div>
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
                <div className="userCard">
                <span>Name: {searchedMovieData.movie.name}</span>
                <span>isInTheaters: {searchedMovieData.movie.isInTheaters}</span>
                <span>yearOfPublication: {searchedMovieData.movie.yearOfPublication}</span>
            </div>
            )}
        </div>
      </div>

      <div>
        <div>
            <input type="text" placeholder="name" onChange={(e)=>{setNewUser({...newUser, name: e.target.value})}} />
            <input type="text" placeholder="age" onChange={(e)=>{setNewUser({...newUser, age: parseInt(e.target.value)})}} />
            <input type="text" placeholder="username" onChange={(e)=>{setNewUser({...newUser, username: e.target.value})}} />
        </div>
        <button onClick={()=>{
            createUser({
                variables:{
                    input:newUser
                }
            })
            setNewUser({
                name: '',
                age: 0,
                username: ''
            })
            refetch();
        }}>Create User</button>
      </div>
    </div>
  );
};

export default DisplayData;
