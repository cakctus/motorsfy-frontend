import api from "../../http/createCarForm/createCar"

const createCarApi = (id, json) => {
  console.log(id, json)
  return api.post(
    "create-car",
    { id, json },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
}

export { createCarApi }
