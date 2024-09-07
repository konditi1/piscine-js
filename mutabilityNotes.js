// Now that we know how to access properties
// We can dynamicaly set them !

// first let's create an empty Object and store it in a variable

const street = {}

console.log(street.name)
// Yep, it's empty

// Now much like a variable, we can assign a value to a property
street.name = 'Matabiau'

console.log(street.name)
// Nice right ?

// we don't need to write `const` because we are not creating a new variable
// Just a property on our Object
// let's fill the rest of the user !

street.number = 175

const address = {
  country: 'Peru',
  town: 'Toulouse',
}

// We can both declare and assign property later :
address.postalCode = 31000

// We can use a variable value
address.street = street

// And we can set a nested object
address.street.type = 'boulevard'

console.log(address)

// Since we need to access our value first,
// if we try to set a property to an undefined value it will fail
// address.postalCode.type = 'boulevard'

// We can re-assign values in objects, let's fix my mistake in the declaration
address.country = 'France'

console.log(address)

const multipleOf5 = []

// We could do the same for arrays :
multipleOf5[0] = 5
multipleOf5[1] = 10
multipleOf5[2] = 15

// Their is another way to do things for Arrays using Array methods
// but I'll show we about those later

// So we just have to access the value we want to set
// and assign a value to it with `=`
// The way we access to set or get is exactly the same
// So every way to access show in the previous example hold true here.

                    //GET

// First let's declare some data to use in our exemples :

const street = {
    number: 175,
    type: 'boulevard',
    name: 'Matabiau',
  }
  
  const address = {
    country: 'France',
    town: 'Toulouse',
    postalCode: 31000,
    street,
  }
  
  const userClement = {
    firstname: 'Clement',
    lastname: 'Denis',
    email: 'cdenis@example.com',
    age: 29,
    address,
  }
  
  // let's create an array of users with 2 users
  const users = [
    userClement,
    {
      firstname: 'Sofiane',
      lastname: 'Martinez',
      email: 'smartine@example.com',
      age: 34,
      address: {
        country: 'France',
        town: 'St-Ouens',
        postalCode: 93400,
        street: {
          number: 78,
          type: 'rue',
          name: 'Garibaldi',
        },
      },
    },
  ]
  
  const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland']
  
  const coords = [
    [32, 45],
    [-38, 57],
    [87, 99],
    [57, -2],
    [-74, -29],
  ]
  
  // Ok so now that we have all those structures, let's see how to access values
  // The first way to access value is using square brackets and the key `['key']`
  
  console.log(street['number'])
  // this will get the value of the property at the key 'number'
  
  console.log(street['name'])
  // here we access the name of the street
  
  // what happen if we try to access a non existing property ?
  console.log(userClement['name'])
  // the key 'name' isn't defined in userClement so we get undefined
  
  console.log(userClement['firstname'])
  console.log(userClement['address']['town'])
  console.log(userClement['address']['street'])
  console.log(userClement['address']['street']['name'])
  
  // What about arrays ?
  // well it's pretty simple, since arrays keys are numeral indexes
  // you just have to remember we start counting at 0
  
  console.log(allowedCountries[0])
  console.log(allowedCountries[1])
  console.log(allowedCountries[2])
  
  // Nested arrays ? you guessed it :
  console.log(coords[0][0])
  console.log(coords[0][1])
  console.log(coords[3][1])
  console.log(coords[3][0])
  
  // But, you have to becarefull not to try to access a property that
  // doesn't exsist, uncomment this line to have an exemple of error :
  // console.log(coords[151][0])
  
  // Since keys are strings, we can use variables values to access our structures
  const myKey = 'name'
  
  // and so if we give our brackets an identifier instead of a string
  // It will find the value of it's variable and use that as a key
  // so here :
  console.log(street[myKey])
  // our key is 'name', the value of myKey
  
  // But if we would have written :
  console.log(street['myKey'])
  // now we are using a string again, those quotes here
  // and we didn't set any property with the key 'myKey' so, that's undefined
  
  // In fact you can write anything between those [] as long as it return you
  // a valid string
  console.log(userClement['last' + myKey])
  
  // You can use operators for Arrays too
  const start = 1
  let position = 0
  
  console.log(allowedCountries[start + position++])
  console.log(allowedCountries[start + position++])
  console.log(allowedCountries[start + position++])
  
  // Now since most of the time we don't need to do complicated access
  // like that, there is another, simplified way to access values
  // that works only if your key is a valid identifier, introducing dot `.`
  console.log(userClement.address.street.name)
  // Now you might recognise this funny guy from `console.log`
  // .id
  // That's right, console is an Object and 'log' is one of it's property !
  // So you have been using the simplified accessor since the begining
  // We could have written :
  console['log']('This is tedious...')
  // Glad we didn't have to do that.
  
  // But no matter which way we write it, JavaScript will always convert keys
  // to strings before accessing an Object property
  
  // Mixing arrays and objects
  
  console.log(users[1].address.street.number)
  console.log(users[0].address.street.number)
  // We can't use users.1 because, as you know, 1 isn't a valid identifier
  

                    //DATA STRUCTURE

// Data structures allow us to structure and organise multiple primitive data

/*
  Object

  Objects are the most common data structure in JavaScript
  It is the base to all other data structures

  They hold properties
  A property is a key / value pair

  The key is a string and we associate it to a value, very much like variables

  We use the curly braces `{}` to create an object
*/

console.log({}) // Loggin an empty object

// To create a property we use the colon `:`
// The first string is a key, and after the colon is the value
console.log({ 'awesome key': 'great value' })
// here I set the string 'great value' to the key 'awesome key'
// I repeate, keys are always strings

// Now, the true power of objects lies in storing multiple properties in them
// To do that we just separate properties with a comma `,` like so :
console.log({ 'first key': 1, 'second key': 22 })
// here I set the number 1 to the key 'first key'
// and the number 22 to 'second key'

// for big objects we split them into multiple lines, one per property
console.log({
  'first key': 1,
  'second key': 22,
  'third key': 333,
  'fourth key': 4444,
  'the last key': 'the end',
})

// If our key is a valid identifiers (like variables identifiers)
// We can omit the quotes ''
console.log({ validKey: 'valid value !' })
// Since this syntax is lighter it is prefered in JavaScript
// so try to use valid identifiers and camelCase whenever possible
// (same rules as variabes)

// Ok let's see how we can model usefull data with that
// here's an address
console.log({
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  streetNumber: 175,
  streetLabel: 'boulevard',
  streetName: 'Matabiau',
})

// Now since objects are values, we can nest them !
// let's refactor a bit our previous object to avoid repetition in the keys
console.log({
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street: {
    number: 175,
    label: 'boulevard',
    name: 'Matabiau',
  },
})

// And like all values, we can store them in variables
const myStreet = {
  number: 175,
  label: 'boulevard',
  name: 'Matabiau',
}

// sweet, let's log that variable value
console.log(myStreet)

// Guess what, we can use variables values when creating objects !
console.log({
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street: myStreet, // here, the value contained in myStreet is used
})

// Let's store this address into a variable
const address = {
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street: myStreet,
}

// Now that would be a more complete user object :
console.log({
  firstname: 'Clement',
  lastname: 'Denis',
  email: 'cdenis@thot.space',
  age: 29,
  address: address,
})

// If we use a variable as a property, like here in address
// We can omit the key, JavaScript will use the variable identifier as it's key
// So we can rewrite the previous user object like so :
console.log({
  firstname: 'Clement',
  lastname: 'Denis',
  email: 'cdenis@thot.space',
  age: 29,
  address, // look ma, no key !
})
// Of course this works only when our variable identifier is our key.
// That's it on declaring objects !

/*
  Array

  They are used to keep ordered lists of values.

  In JavaScript, Arrays are Objects with special rules:
  - They use number as keys, we call those keys index (starting at 0)
  - They keep their content in order
  - They have a special property 'length' to get the size of our list
  - And much, much more (but that's enough for now)

  We use the square brackets `[]` to create an Array
*/

console.log([]) // Here I log an empty array

console.log([1, 2, 3]) // We don't need to specify the index
// that would roughly translate to this object:
console.log({ '0': 1, '1': 2, '2': 3 })

// So if we have a bunch of values we want to group together
// but the keys are not important, we can use an array
// to automaticaly create ordered index for our values.

// Overall the syntax to create them is quite simpler than objects
// since we don't need to specify the keys.

// Just like objects, they are values
// So like all other values we can store them in variables

const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland']

console.log(allowedCountries)

// Of course we can make arrays of arrays
console.log([
  [32, 45],
  [-38, 57],
  [87, 99],
  [57, -2],
  [-74, -29],
])

// we can use variables values
console.log([allowedCountries, allowedCountries, allowedCountries])
// Here I made an array with 3 countries

// And we can freely mix arrays and objects, any values really, surprise me
console.log({
  head: [
    { x: 5, y: 5 },
    { x: 6, y: 4 },
    { x: 7, y: 3 },
  ],
  tail: [
    { x: 3, y: 7 },
    { x: 4, y: 6 },
    { x: 5, y: 5 },
  ],
})

// This way we can model our data to have a structure that
// help us understand it and access it
