const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
  
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

  person.age = person.age+1
  person.country = "FR"
  console.log(clone1)
  
