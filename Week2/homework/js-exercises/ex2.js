function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if (number >= 10) {
      return resolve();
    }
    return reject();
  });
}

checkDoubleDigits(10)
  .then(result => {
    console.log('The number equals or is bigger than 10!');
  })
  .catch(reject => {
    console.log('Error! The number is smaller than 10...');
})