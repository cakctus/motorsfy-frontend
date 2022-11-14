type Props = {
  carName: (car: string) => void
}

const CreateCarNameForm = ({ carName }: Props) => {
  return (
    <div>
      <label htmlFor="car">Car Name</label>
      <input
        type="text"
        id="car"
        name="car"
        placeholder="Car Name"
        onChange={(e: any) => carName(e.target.value)}
      />
    </div>
  )
}

export default CreateCarNameForm
