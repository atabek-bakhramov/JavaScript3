function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve('The number equals or is bigger than 10!');
    }
    reject(new Error('Error! The number is smaller than 10...'));
  });
}

checkDoubleDigits(9)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
})