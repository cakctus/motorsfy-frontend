import { useState } from "react"
import {
  useGetAllBrandsQuery,
  useGetAllModelsQuery,
  useGetGenerationsQuery,
} from "../../../redux/carsCRUDApi"
import BrandsList from "../CreateModel/BrandsList/BrandsList"
import ModelsList from "../CreateGeneration/ModelsList/ModelsList"
import GenerationsList from "./GenerationsList.js/GenerationsList"
import CarsDimintions from "./CarsDimentions/CarsDimentions"
import CarsGeneration from "./CarsModification/CarsModification"
import CarsDBS from "./CarsDBS/CarsDBS"
import CarsECH from "./CarsECH/CarsECH"
import CarsEO from "./CarsEO/CarsEO"
import CarsICE from "./CarsICE/CarsICE"
import CarsICEngine from "./CarsICEngine/CarsICEngine"
import CarsPerformance from "./CarsPerformance/CarsPerformance"
import CarsSVW from "./CarsSVW/CarsSVW"
import CarsMEEList from "./CarsMEE/CarsMEEList"
import ModificationPhoto from "./ModificationPhoto/ModificationPhoto"

const CreateModification = () => {
  const [skipModel, setSkipModel] = useState(true)
  const [skipGeneration, setSkipGeneration] = useState(true)
  const [engineList, setEngineList] = useState([])
  const [modification, setModification] = useState({
    brandId: 1,
    modelId: 1,
    generationId: 1,
    name: null,
    image: null,
    startProd: null,
    endProd: null,
    powertrainArchitecture: null,
    bodyType: null,
    seats: null,
    doors: null,
    carsDimentions: {
      length: "",
      width: "",
      height: "",
      wheelbase: "",
      front_track: "",
      rear_back_track: "",
      minimum_turning_circle_turning_diameter: "",
      width_including_mirrors: "",
      front_overhang: "",
      rear_overhang: "",
      ride_height_ground_clearance: "",
      width_with_mirrors_folded: "",
      approach_angle: "",
      departure_angle: "",
      drag_coefficient_cd: "",
      ramp_angle: "",
      wading_depth: "",
    },
    cars_drivetrainbrakessuspension: {
      drivetrain_architecture: "",
      drive_wheel: "",
      number_of_gears_automatic_transmission: "",
      front_suspension: "",
      rear_suspension: "",
      front_brakes: "",
      rear_brakes: "",
      assisting_systems: "",
      steering_type: "",
      power_steering: "",
      tires_size: "",
      wheel_rims_size: "",
      number_of_gears_manual_transmission: "",
    },
    carsElectricCarsHybrids: {
      gross_battery_capacity: "",
      all_electric_range_wltp: "",
      all_electric_range: "",
      average_energy_consumption_wltp: "",
      average_energy_consumption: "",
      system_power: "",
      system_torque: "",
      average_energy_consumption_nedc: "",
      max_speed_electric: "",
      all_electric_range_nedc: "",
      net_usable_battery_capacity: "",
      battery_technology: "",
      recuperation_output: "",
      all_electric_range_nedc_wltp_equivalent: "",
      average_energy_consumption_nedc_wltp_equivalent: "",
      battery_voltage: "",
    },
    carsEngineOil: {
      coolant: "",
      engine_systems: "",
    },
    carsICEngine: {
      power: "",
      power_per_litre: "",
      torque: "",
      engine_location: "",
      engine_displacement: "",
      number_of_cylinders: "",
      position_of_cylinders: "",
      cylinder_bore: "",
      piston_stroke: "",
      compression_ratio: "",
      number_of_valves_per_cylinder: "",
      engine_aspiration: "",
      engine_oil_capacity: "",
      oil_viscosity: "",
      coolant: "",
      engine_model_code: "",
      fuel_system: "",
      valvetrain: "",
      engine_systems: "",
      maximum_engine_speed: "",
    },
    carsInternalCombustionEngine: {
      power: "",
      power_per_litre: "",
      torque: "",
      engine_location: "",
      engine_displacement: "",
      number_of_cylinders: "",
      position_of_cylinders: "",
      cylinder_bore: "",
      piston_stroke: "",
      compression_ratio: "",
      number_of_valves_per_cylinder: "",
      fuel_system: "",
      engine_aspiration: "",
      valvetrain: "",
      maximum_engine_speed: "",
      engine_model_code: "",
      engine_oil_capacity: "",
      oil_viscosity: "",
      coolant: "",
      engine_systems: "",
    },
    carsPerformance: {
      fuel_consumption_economy_urban: "",
      fuel_consumption_economy_extra_urban: "",
      fuel_consumption_economy_combined: "",
      co2_emissions: "",
      fuel_type: "",
      acceleration_0_100_km_h: "",
      acceleration_0_62_mph: "",
      maximum_speed: "",
      weight_to_power_ratio: "",
      weight_to_torque_ratio: "",
      emission_standard: "",
      fuel_consumption_at_low_speed_wltp: "",
      fuel_consumption_at_medium_speed_wltp: "",
      fuel_consumption_at_high_speed_wltp: "",
      fuel_consumption_at_very_high_speed_wltp: "",
      combined_fuel_consumption_wltp: "",
      co2_emissions_wltp: "",
      acceleration_0_60_mph: "",
      s_100_km_h_0: "",
      fuel_consumption_economy_urban_nedc_wltp_equivalent: "",
      fuel_consumption_economy_extra_urban_nedc_wltp_equivalent: "",
      fuel_consumption_economy_combined_nedc_wltp_equivalent: "",
      co2_emissions_nedc_wltp_equivalent: "",
      acceleration_0_300_km_h: "",
      fuel_consumption_economy_urban_nedc: "",
      fuel_consumption_economy_extra_urban_nedc: "",
      fuel_consumption_economy_combined_nedc: "",
      co2_emissions_nedc: "",
      fuel_consumption_at_low_speed_wltp_cng: "",
      fuel_consumption_at_medium_speed_wltp_cng: "",
      fuel_consumption_at_high_speed_wltp_cng: "",
      fuel_consumption_at_very_high_speed_wltp_cng: "",
      combined_fuel_consumption_wltp_cng: "",
      fuel_consumption_economy_urban_cng_nedc: "",
      fuel_consumption_economy_extra_urban_cng_nedc: "",
      fuel_consumption_economy_combin: "",
    },
    carSpaceVolumeWeights: {
      kerb_weight: "",
      fuel_tank_capacity: "",
      trunk_boot_space_minimum: "",
      permitted_trailer_load_with_brakes_12: "",
      max_weight: "",
      max_load: "",
      trunk_boot_space_maximum: "",
      max_roof_load: "",
      adblue_tank: "",
      permitted_trailer_load_without_brakes: "",
      permitted_towbar_download: "",
      permitted_trailer_load_with_brakes_8: "",
      cng_cylinder_capacity: "",
    },
    carsModificationElectricEngine: engineList,
  })
  const [responseMsg, setResponseMsg] = useState("")
  const { data: brandsListData } = useGetAllBrandsQuery()
  const { data: modelsList } = useGetAllModelsQuery(modification?.brandId, {
    skipModel,
  })
  const { data: generationsList } = useGetGenerationsQuery(
    modification?.modelId,
    {
      skipGeneration,
    }
  )

  if (
    JSON.parse(localStorage.getItem("token")).email !== "cakctusinc@gmail.com"
  ) {
    window.location.assign("/")
  }

  const createModificationHandler = async (e) => {
    const data = new FormData()
    for (const property in modification) {
      if (property === "image") {
        data.append(property, modification[property])
      }
      data.append(property, JSON.stringify(modification[property]))
    }
    const result = await fetch(
      "http://localhost:5000/api/create-modification/",
      {
        method: "POST",
        body: data,
      }
    )
    const resultJson = await result.json()
    if (resultJson?.created) {
      setResponseMsg(resultJson?.msg)
    }
  }

  return (
    <div className="container">
      <h3>Create Modification</h3>
      <div>{responseMsg && responseMsg}</div>
      <BrandsList
        data={brandsListData}
        modification={modification}
        setModification={setModification}
        setSkipModel={setSkipModel}
      />
      <ModelsList
        data={modelsList}
        modification={modification}
        setModification={setModification}
        setSkipGeneration={setSkipGeneration}
      />
      <GenerationsList
        data={generationsList}
        modification={modification}
        setModification={setModification}
      />
      <CarsGeneration
        modification={modification}
        setSkipModel={setSkipModel}
        setSkipGeneration={setSkipGeneration}
        setModification={setModification}
      />
      <ModificationPhoto
        modification={modification}
        setModification={setModification}
      />
      <CarsDimintions
        modification={modification}
        setModification={setModification}
      />
      <CarsDBS modification={modification} setModification={setModification} />
      <CarsECH modification={modification} setModification={setModification} />
      <CarsEO modification={modification} setModification={setModification} />
      <CarsICE modification={modification} setModification={setModification} />
      <CarsICEngine
        modification={modification}
        setModification={setModification}
      />
      <CarsPerformance
        modification={modification}
        setModification={setModification}
      />
      <CarsSVW modification={modification} setModification={setModification} />
      <CarsMEEList
        modification={modification}
        setModification={setModification}
        engineList={engineList}
        setEngineList={setEngineList}
      />

      <div>
        <button onClick={createModificationHandler}>Create</button>
      </div>
    </div>
  )
}

export default CreateModification
