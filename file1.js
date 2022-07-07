const getRandomNumber = (limit) => {
  const x = Math.ceil(Math.random() * limit);
  console.log(x);
  return x
}

getRandomNumber(100);