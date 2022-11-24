import auth from "../http/auth"

const fetchUsers = async () => {
  auth.get("/users")
}

export default fetchUsers
