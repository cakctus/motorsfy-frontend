export const check = (str) => {
  let type
  switch (str) {
    case "approach_angle":
      type = "Approach angle"
      break
    case "departure_angle":
      type = "Departure angle"
      break
    case "widrag_coefficient_cddth":
      type = "Drag Coefficient"
      break
    case "front_overhang":
      type = "Front overhand"
      break
    case "front_track":
      type = "Front track"
      break
    case "minimum_turning_circle_turning_diameter":
      type = "Minimum turing ciricle"
      break
    case "ramp_angle":
      type = "Ramp angle"
      break
    case "rear_back_track":
      type = "Rear back track"
      break
    case "rear_overhang":
      type = "Rear overhang"
      break
    case "ride_height_ground_clearance":
      type = "Ride height ground clearance"
      break
    case "wading_depth":
      type = "Wading depth"
      break
    case "wheelbase":
      type = "Wheelbase"
      break
    case "width_including_mirrors":
      type = "Width including mirrors"
      break
    case "width":
      type = "Width"
      break
    case "length":
      type = "Lenght"
      break
    case "height":
      type = "Height"
      break
    case "width_with_mirrors_folded":
      type = "Width with mirrors folded"
      break
    default:
      console.log(`Sorry, we are out of ${type}.`)
  }
  return type
}
