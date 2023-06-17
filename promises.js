function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let k = 1;
        const data = 2 /k ;
        k--;
        if (data === 2 ) {
          resolve(data)
        } else {
          reject('Error: Data not found'); // Error occurred during the operation
        }
      }, 2000); // Simulating an asynchronous operation with a delay of 2 seconds
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data); // Output: Data received
    })
    .then((data) => {
        console.log(data); // Output: Data received

    })
    .catch((error) => {
      console.log(error); // Output: Error: Data not found
    });
  