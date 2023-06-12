function getData(){

   let response =  fetch('https://api.instantwebtools.net/v1/airlines')
      .then(response => response.json())
      .then(json => console.log("response" ,json))

    let response1 =  fetch('https://api.instantwebtools.net/v1/airlines')
    .then(response => response.json())
    .then(json => console.log("response1" ,json))


    let response2 =  fetch('https://api.instantwebtools.net/v1/airlines')
    .then(response => response.json())
    .then(json => console.log("response2" ,json))


      for(let i=0; i < 999; i++)
      {
          console.log("i value  =", i);
      }
}

getData();

console.log("test");
