const { UsersList } = require("../data")


const resolvers = {
    Query:{
      users: () =>{
        return UsersList;
      }
    }
}

module.exports = {resolvers}