import auth from "../http/auth"

const registration = async (email: string, password: string) => {
  return auth.post("/registration", { email, password })
}

const login = async (email: string, password: string) => {
  return auth.post("/login", { email, password })
}

const logout = async (email: string, password: string) => {
  return auth.post("/logout")
}

export { registration, login, logout }
