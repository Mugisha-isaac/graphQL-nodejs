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
            return _.filter(MoviesList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010 );
        }
    },

    Mutation:{
      createUser: (parent,args) => {
        const user = args.input;
        const lastId = UsersList[UsersList.length -1].id;
        user.id = lastId + 1;
        UsersList.push(user);
        return user;
      }
    }
}

module.exports = {resolvers}