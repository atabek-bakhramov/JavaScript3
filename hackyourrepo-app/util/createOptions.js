const createOptions = (array, optionsHolder) => {
  array.sort((a, b) => {
    let x;
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      x = 1;
    } else if (b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()) {
      x = -1;
    } else {
      x = 0;
    }
    return x;
  });
  array.forEach((element, index) => {
    const option = document.createElement('option');
    option.innerText = element.name;
    option.value = index;
    optionsHolder.appendChild(option);
  });
};

export default createOptions;
