let searchButton = document.querySelector("#search")
searchButton.addEventListener('click',()=>{ 
console.log("button pressed")
sendApiRequest()
});
async function sendApiRequest(){
let APP_ID ="3e255b03"
let API_KEY="650d630b1f2dcb74b69319df738a61b3"
let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
console.log(response)
let data = await response.json()
console.log(data)
useApiData(data)
}


function useApiData(data){
document.querySelector("#content").innerHTML=`
<div class="card" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">source : ${data.hits[0].recipe.source}</p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
}