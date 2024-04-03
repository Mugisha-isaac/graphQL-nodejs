const UsersList = [
  {
    id: 1,
    name: 'John',
    username: 'John Doe',
    age: 20,
    nationality: 'Rwanda',
    friends:[
        {
            id: 3,
            name: 'Joshua',
            username: 'John Ndikumwenayo',
            age: 20,
            nationality: 'Rwanda'
          },
    ]
  },
  {
    id: 2,
    name: 'Jean',
    username: 'Jean Joe',
    age: 20,
    nationality: 'Rwanda'
  },
  {
    id: 3,
    name: 'Joshua',
    username: 'John Ndikumwenayo',
    age: 20,
    nationality: 'Rwanda',
    friends:[
        {
            id: 4,
            name: 'Mucyo',
            username: 'James',
            age: 20,
            nationality: 'Rwanda'
          } 
    ]
  },
  {
    id: 4,
    name: 'Mucyo',
    username: 'James',
    age: 20,
    nationality: 'Rwanda'
  },
  {
    id: 5,
    name: 'Musangwa',
    username: 'Herve Musangwa',
    age: 20,
    nationality: 'Rwanda'
  }
];

const MoviesList = [
    {
        id: 1,
        name: 'Avengers Endgame',
        yearOfPublication: 2024,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'The Shawshank Redemption',
        yearOfPublication: 1994,
        isInTheaters: false
    },
    {
        id: 3,
        name: 'Inception',
        yearOfPublication: 2010,
        isInTheaters: false
    },
    {
        id: 4,
        name: 'The Godfather',
        yearOfPublication: 1972,
        isInTheaters: false
    },
    {
        id: 5,
        name: 'Pulp Fiction',
        yearOfPublication: 1994,
        isInTheaters: false
    }
];


module.exports = {UsersList,MoviesList};