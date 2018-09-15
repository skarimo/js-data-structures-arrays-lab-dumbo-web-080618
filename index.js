const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  let new_arr = [...drivers, name]
  return new_arr
}

function prependDriver(name) {
  let new_arr = [name, ...drivers]
  return new_arr
}

function removeLastDriver() {
  return drivers.slice(0,-1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
