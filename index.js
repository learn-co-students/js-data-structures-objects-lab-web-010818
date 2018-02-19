// Write your solution in this file!

const driver = {};

// doesnt modify the original,
// but rather returns a clone with the new data
function updateDriverWithKeyAndValue(driver, key, value) {
   const newDriver = { ...driver };

   newDriver[key] = value;

  return newDriver;
}

// Modify an object's properties in a destructive way
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver;
}

//deleting a key from an object in a non destructive way
function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);

  delete newDriver[key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  
  return driver
}
