
  const clone1 = {
    person
  }
  Object.freeze(clone1.person)

  const clone2 = {
      person
    }
    Object.freeze(clone2.person)

  const samePerson = {
    person
  }

  person.age = 78
  person.country = "FR"
  console.log(clone1)
  
