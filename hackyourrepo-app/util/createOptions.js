const createOptions = (data, optionsHolder) => {
  data.sort((a, b) => a.name.localeCompare(b.name));
  data.forEach((element, index) => {
    const option = document.createElement('option');
    option.innerText = element.name;
    option.value = index;
    optionsHolder.appendChild(option);
  });
};

export default createOptions;
