import { useParams, Link, useNavigate } from "react-router-dom"
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

import "./style.scss"
import ElectricEnginess from "./ElectricEnginess/ElectricEnginess"

const ModificationItem = () => {
  const { modificationId } = useParams()
  const navigate = useNavigate()
  const { data = [], isLoading } = useGetModificationDetailQuery(modificationId)
  const rating = useGetRatingQuery(modificationId)
  const [putRating, result] = usePutRatingMutation()
  const commentsData = data?.comment

  if (data === null || undefined) {
    return navigate("/")
  }

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
      <div className="container">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="breadcrumb">
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">
              Home <span className="breadcrumb-slash">/</span>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/brands">
              All brands <span className="breadcrumb-slash">/</span>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link
              to={`/brands/${data?.cars_generation?.cars_model?.cars_brand?.name}`}
            >
              {data?.cars_generation?.cars_model?.cars_brand?.name}
              <span className="breadcrumb-slash">/</span>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link
              to={`/brands/${data?.cars_generation?.cars_model?.cars_brand?.name}/model/${data?.cars_generation?.model_id}`}
            >
              {data?.cars_generation?.cars_model?.name}{" "}
              <span className="breadcrumb-slash">/</span>
            </Link>
          </li>
          <li className="breadcrumb-item">{data?.cars_generation?.name}</li>
        </ul>
      </div>
      <div className="modification-item-container">
        <Rating modificationId={modificationId} />
        <Preview ress={ress} />
        <Dimentions ress={ress} />
        <SpaceVolume ress={ress} />
        <Drivetrain ress={ress} />
        <Performance ress={ress} />
        <ElectricsHybrids ress={ress} />
        <Engine ress={ress} />
        <ElectricEngines ress={ress} />
        <ElectricEnginess ress={ress} />
        <Comments modificationId={modificationId} commentsData={commentsData} />
      </div>
    </div>
  )
}

export default ModificationItem
