import auth from "../../http/auth"

const brands = async () => {
  return auth.get("/cars-brands")
}

const models = async (brandId) => {
  return auth.post("/cars-models", { brandId })
}

const generations = async (modelId) => {
  return auth.post("/cars-generations", { modelId })
}

const modifications = async (generationId) => {
  return auth.post("/cars-modifications", { generationId })
}

export { brands, models, generations, modifications }
