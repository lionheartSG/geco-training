setTimeout(() => {
  alert("Welcome to Week 1 Day 3 assignment")
}, 3000);

function getAPI(){
  const result = document.getElementById("name").value
  const results = document.querySelector("#results")

  url = `https://www.omdbapi.com/?s=${result}&apikey=7fd2119a`
  axios.get(url)
  .then(function(res){
    res.data.Search.forEach(r => {
      const movieTag =
      `<li>
        <img src="${r.Poster}">
        <p>${r.Title}</p>
      </li>`
      results.insertAdjacentHTML("beforeend", movieTag)
    })
  })
  .catch(function(err){
    console.log(err)
  })
}

function toMakeAPromise(a){
  console.log("Please wait for 5 seconds before Promise is made :)")
  setTimeout(() => {
    const promiseMe = new Promise((resolve, reject) => {
      if (typeof a === "string") {
        setTimeout(() => {
          resolve(a.toUpperCase());
        }, 5000);
      } else {
        setTimeout(() => {
          reject('This promise is settled but rejected after 2 seconds');
        }, 2000);
      }
    });

    promiseMe.then(
      (result) => {
         console.log(result);
      },
      (error) => {
         console.log(error);
      }
    );
  }, 5000);
}

toMakeAPromise("This is a string. Resolved and made upperCase!")
toMakeAPromise(123)
