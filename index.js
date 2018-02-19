let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // take in a driver object and a key. It should delete the key/value pair for the key that was passed in from the driver object. This should all not actually mutate the driver passed in.
  newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  // same as deleteFromDriverByKey() but it should mutate the driver passed in
  delete driver[key];
  return driver;
}
