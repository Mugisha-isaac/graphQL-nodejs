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

const DisplayData = () => {
  const { data } = useQuery(QUERY_ALL_USERS);

  if (data) {
    console.log("data ====> ", data);
  }
  return (
    <div>
      <h1>List of users</h1>
    </div>
  );
};

export default DisplayData;
