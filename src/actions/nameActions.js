import ActionConstants from './ActionConstants'

export function namesFetchDataSuccess(names) {
  return {
    type: ActionConstants.ADD_NAMES,
    names
  }
}

export function displayPerson(personId) {
  return {
    type: ActionConstants.DISPLAY_PERSON,
    personId
  }
}

export function loadingData(isLoading) {
  return {
    type: ActionConstants.LOADING,
    isLoading
  }
}

function getRandomInt(max) {
  let upperLimit = max
  if (max === undefined) {
    upperLimit = 9999999
  }
  return Math.floor(Math.random() * Math.floor(upperLimit))
}

export function namesFetchData(url) {
  return (dispatch) => {
    dispatch(loadingData(true))
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
          peopleArray.push({
            id: getRandomInt(),
            name: combinedName,
            location: location,
            email: email
          })
        }
        return peopleArray
      })
      .then((peopleArray) => {
        dispatch(loadingData(false))
        dispatch(namesFetchDataSuccess(peopleArray))
      })
  }
}
