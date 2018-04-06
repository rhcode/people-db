import ActionConstants from './ActionConstants'

export function namesFetchDataSuccess(names) {
  return {
    type: ActionConstants.ADD_NAMES,
    names
  }
}

export function displayPersonName(personName) {
  return {
    type: ActionConstants.DISPLAY_NAME,
    personName
  }
}

export function namesFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then((response) => response.json())
      .then((json) => {
        const allPeople = json["results"]
        let peopleArray = []
        for (let person of allPeople) {
          let name = person["name"]
          let location = person["location"]
          let email = person["email"]

          let combinedName = name["first"] + " " + name["last"]
          peopleArray.push({name: combinedName, location: location, email: email})
        }
        return peopleArray
      })
      .then((peopleArray) => dispatch(namesFetchDataSuccess(peopleArray)))
  }
}
