export const check = (str) => {
  let type
  switch (str) {
    case "adblue_tank":
      type = "Adblue tank"
      break
    case "cng_cylinder_capacity":
      type = "Cng cylinder capacity"
      break
    case "fuel_tank_capacity":
      type = "Fuel tank capacity"
      break
    case "kerb_weight":
      type = "Kerb weight"
      break
    case "max_load":
      type = "Max load"
      break
    case "max_roof_load":
      type = "Max roof load"
      break
    case "max_weight":
      type = "Max Weight"
      break
    case "permitted_towbar_download":
      type = "Permitted towbar download"
      break
    case "permitted_trailer_load_with_brakes_8":
      type = "Permitted trailer load with brakes 8"
      break
    case "permitted_trailer_load_with_brakes_12":
      type = "Permitted trailer load with brakes 12"
      break
    case "permitted_trailer_load_without_brakes":
      type = "Permitted trailer load with brakes"
      break
    case "trunk_boot_space_maximum":
      type = "Trunk boot space maximum"
      break
    case "trunk_boot_space_minimum":
      type = "Trunk boot space minimum"
      break
    default:
      console.log(`Sorry, we are out of ${type}.`)
  }
  return type
}
