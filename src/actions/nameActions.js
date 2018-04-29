import ActionConstants from './ActionConstants'

export function namesFetchDataSuccess(names) {
  return {
    type: ActionConstants.ADD_NAMES,
    names
  }
}

export function displayPerson(currentPersonId) {
  return {
    type: ActionConstants.DISPLAY_PERSON,
    currentPersonId
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
          let picture = person["picture"]

          let combinedName = name["first"].charAt(0).toUpperCase() + name["first"].slice(1)
            + " " + name["last"].charAt(0).toUpperCase() + name["last"].slice(1)
          peopleArray.push({
            id: getRandomInt(),
            name: combinedName,
            location: location,
            email: email,
            picture: picture.large
          })
        }
        return peopleArray
      })
      .then((peopleArray) => {
        dispatch(loadingData(false))
        dispatch(displayPerson(peopleArray[0].id))
        dispatch(namesFetchDataSuccess(peopleArray))
      })
  }
}
