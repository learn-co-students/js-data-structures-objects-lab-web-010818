// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value }
  );
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const driver2 = {driver};
  delete driver2.key;
  return driver2;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];

  return driver;
}
