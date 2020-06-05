  
 // oops-> class -> object (inheritence)
 // functional programming -> Smaller function compose into
 // larger function (React/REDUX).

  function getFirstname(fullName) {
        return fullName.split(" ")[0];
  }
  
  function getLastname(fullName) {
        return fullName.split(" ")[1];
  }

    // HOF -> The function that takes smaller 
    // function as an input

  function greeter(fullName, cb) {
        let message = cb(fullName);
        console.log("Hi " + message);
  }

  greeter("Yogesh Sharma", getFirstname);
  greeter("Yogesh Sharma", getLastname);

