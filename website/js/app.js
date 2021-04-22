async function getWeather(input) {
  const myKey = "af83090e7a77e9d30aca75a3c92a3d77";

  //make request to url

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
  );

  const data = await response.json();

  console.log(data);

  return data;
}

//UI 

function answer(data) {
  //de-structure vars
  const uiContainer = document.getElementById("content");
  //add them to inner HTML
  const mood = document.getElementById('feelings');
  const img=document.getElementById('images');
  uiContainer.innerHTML = `
      <div>
          <div class="card-body">
              <p class="name">Weather in ${data.name}</p>
              <div>
              <img src="../img/temperature-high.svg" alt="" class="images">
              <span class="temp">Temperature: ${data.main.temp}°C.</span>
              </div>

              <div>
              <img src="../img/cloud.svg" alt="cloud" class="images">
              <span class="description">Description: ${data.weather[0].description}</span>
              </div>

              <div>
              <img src="../img/wind.svg" alt="wind" class="images">
              <span class="wind">Wind: ${data.wind.speed}km/h</span>
              </div>

              <div>
              <img src="../img/water.svg" alt="water" class="images">
              <span class="humidity">Humidity: ${data.main.humidity}%</span>
              </div>

              <div>
              <img src="../img/smile.svg" alt="smile" class="images">
              <span class"mood">Mood: ${mood.value}</span>
              </div>
              </div>
      </div>
      
      `;
    
}

//add event listeners//

const search = document.getElementById("zip");
const button = document.getElementById("generate");
button.addEventListener("click", () => {
  const currentVal = search.value;

  getWeather(currentVal).then((data) => {
    //call a UI method//
    answer(data);
   
  });
});






















