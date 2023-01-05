import { useParams } from "react-router-dom"
import {
  useGetModificationDetailQuery,
  usePutRatingMutation,
  useGetRatingQuery,
} from "../../redux/carsApi"
import Rating from "./Rating/Rating"
import Preview from "./Preview/Preview"
import Dimentions from "./Dimentions/Dimentions"
import SpaceVolume from "./SpaceVolume/SpaceVolume"
import Drivetrain from "./Drivetrain/Drivetrain"
import Performance from "./Performance/Performance"
import ElectricsHybrids from "./ElectricsHybrids/ElectricsHybrids"
import Engine from "./Engine/Engine"
import ElectricEngines from "./ElectricEngines/ElectricEngines"
import Comments from "./Comments/Comments"

const ModificationItem = () => {
  const { modificationId } = useParams()
  const {
    data = [],
    isLoading,
    isError,
  } = useGetModificationDetailQuery(modificationId)
  const rating = useGetRatingQuery(modificationId)
  const [putRating, result] = usePutRatingMutation()
  const commentsData = data.comment

  const ress = Object.entries(data)
    .filter((arr) => arr[1] !== null)
    .reduce(
      (object, item) => ({
        ...object,
        [item[0]]: item[1],
      }),
      {}
    )

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  const handleRating = (value) => {
    putRating({
      id: modificationId,
      rating: value,
      userId: JSON.parse(localStorage.getItem("user")).userId,
    })
  }

  return (
    <main>
      <Rating modificationId={modificationId} />
      <Preview ress={ress} />
      <Dimentions ress={ress} />
      <SpaceVolume ress={ress} />
      <Drivetrain ress={ress} />
      <Performance ress={ress} />
      <ElectricsHybrids ress={ress} />
      <Engine ress={ress} />
      <ElectricEngines ress={ress} />
      <Comments modificationId={modificationId} commentsData={commentsData} />
    </main>
  )
}

export default ModificationItem
