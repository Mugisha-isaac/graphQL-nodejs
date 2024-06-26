const {gql} = require("apollo-server");

const typeDefs = gql`
   type User{
     id: ID!,
     name: String!,
     username: String!,
     age: Int!,
     nationality: Nationality!,
     friends: [User],
     favoriteMovies: [Movie]
   }

   type Movie{
     id: ID!,
     name: String!
     yearOfPublication: Int!
     isInTheaters: Boolean!
   }
   type Query{
     users: [User!]!
     user(id: ID!): User!
     movies: [Movie!]!
     movie(name: String!): Movie!
   }

   input CreateUserInput{
     name: String!,
     username: String!,
     age: Int = 18,
     nationality: Nationality = Rwanda,
   }

   input updateUserInput{
    username: String!,
    user: CreateUserInput!
   }

   type Mutation{
      createUser(input: CreateUserInput!): User!
      updateUser(input: updateUserInput!): User
      deleteUser(id: ID!): User
   }

   enum Nationality{
    Rwanda
   }
`;

module.exports = {typeDefs}