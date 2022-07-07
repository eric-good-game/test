const calc = (a,b,c) => {
  switch (c) {
    case '+':
      console.log(a+b);      
      return a+b
    case '-':
      console.log(a-b);      
      return a-b
    case '*':
      console.log(a*b);      
      return a*b
  
    default:
      break;
  }
}

calc(6,7,'*')
