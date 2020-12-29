function promiseTimeout(firstName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error('Please insert the first name'));
      }
      const fullName = `${firstName} Doe`;
      resolve(fullName);
    }, 1000);
  });
}

promiseTimeout()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
