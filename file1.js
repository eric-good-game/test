const getRandomNumber = (limit) => {
  const x = Math.ceil(Math.random() * limit);
  console.log(x);
  return x
}

getRandomNumber(100);

const isPrimeNumber = n => {
  if (n==2) {
    console.log(false);
    return false
  }
  for(let i=2;i<n;i++){
    if(!(n%i)){
      console.log(false);
      return false
    }
  }
  console.log(true);
  return true
}

isPrimeNumber(2);
isPrimeNumber(3);