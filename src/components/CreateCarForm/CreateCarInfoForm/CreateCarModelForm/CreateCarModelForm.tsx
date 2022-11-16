type Props = {
  carModel: (carModel: string) => void
}

const CreateCarModelForm = ({ carModel }: Props) => {
  return (
    <>
      <div>
        <label htmlFor="model">Car Model</label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Car Model"
          onChange={(e) => carModel(e.target.value)}
        />
      </div>
    </>
  )
}

export default CreateCarModelForm
