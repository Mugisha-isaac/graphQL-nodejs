const { UsersList, MoviesList } = require("../data")
const _ = require("lodash");

const resolvers = {
    Query:{

        // user resolvers
      users: () =>{
        return UsersList;
      },
      user: (parent,args) =>{
        const id = args.id;
        const user = _.find(UsersList, {id: Number(id)});
        return user;
      },

      // movie resolver
      movies: () =>{
       return MoviesList;
      },
      movie: (parent,args) =>{
        const movieName = args.name;
        const movie = _.find(MoviesList, {name: movieName});
        return movie;
      }
    },

    User:{
        favoriteMovies: () =>{
            return MoviesList;
        }
    }
}

module.exports = {resolvers}