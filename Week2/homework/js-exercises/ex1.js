function promiseTimeout(firstName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        return reject();
      }
      const fullName = `${firstName} Doe`;
      return resolve(fullName);
    });
  }, 5000); // not waiting for 5 secs why?
}

promiseTimeout('John')
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });