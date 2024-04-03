const { UsersList } = require("../data")
const _ = require("lodash");

const resolvers = {
    Query:{
      users: () =>{
        return UsersList;
      },
      user: (parent,args) =>{
        const id = args.id;
        const user = _.find(UsersList, {id: Number(id)});
        return user;
      }
    }
}

module.exports = {resolvers}