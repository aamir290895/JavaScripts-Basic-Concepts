let k = 1;

function fetchData() {
    return new Promise((resolve, reject) => {
        let data = [2 /k , 3/k];

        data.forEach( (data )=> {
        if (data === 2){
          resolve(data)
        } else { 
          reject('Error: Data not found'); // Error occurred during the operation
        }
    })
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
  