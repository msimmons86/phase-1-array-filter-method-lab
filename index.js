// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}


function fuzzyMatch(drivers, name){
  return drivers.filter(function(letters) {
      return letters.startsWith(name)
  })
}

function matchName(drivers, name) {
  const result = drivers.filter(driver => driver.name === name)
  return result;
}