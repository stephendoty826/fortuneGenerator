// This is the input for the button

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit");
});

// this is the weather API
function fetchWeatherData() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=24S9KU9RJJ6BBP3MT9EMRXLF3"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
fetchWeatherData();

// Make a POST request to the OpenAI API
// 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
fetch(`https://api.openai.com/v1/completions`, {
  body: JSON.stringify({
    model: "text-davinci-003",
    prompt: "Tell me a fortune for a person living in London",
    temperature: 0,
    max_tokens: 20,
  }),
  method: "POST",
  headers: {
    "content-type": "application/json",
    Authorization:
      "Bearer  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",
  },
}).then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      console.log(json);
    });
  }
  
});
// document.getElementById("fortune").textContent = response;
