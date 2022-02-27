// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {

    if (42 > someValue) {
    return 42 - someValue; 
  } else {
    return someValue - 42
  }
}
  
 function distanceFromHqInFeet(someValue) {
  let distance = distanceFromHqInBlocks (someValue) * 264
  return distance
    }

  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(start - destination) * 264
  return distance
      }

  function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination) * 264
    let distance = blockDistance

      if (distance <= 400) {
      return 0

      } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02
      
      } else if (distance > 2000 && distance < 2500) {
        return 25;

      } else if (distance >= 2500) {
        return "cannot travel that far"
      }
    }