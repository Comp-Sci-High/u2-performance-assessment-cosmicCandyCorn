const prompt = require('prompt-sync')();

async function openAI(message){
let ApiKey = ""
  const options = {
    method: "POST",
    headers: {
        Authorization:'Bearer ' + ApiKey,
        "Content-Type": "application/json",
    },
  body: JSON.stringify(message)
}
const response = await fetch ('https://api.openai.com/v1/chat/completions', options);
let data = await response.json()
console.log(data.choices[0].message.content)
return data;
}

let ask2 = prompt('how are you today?');

let openAIThing = {
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "You are talking to a person that lives in new york and wants to know the weather"
    },
    {
      "role": "user",
      content: ask2
    }
  ]
}

openAI(openAIThing);



async function findWeather(nyc) {    
// const options = {
//   method: "GET",
//   headers: {
//       Authorization:'Bearer ' + apiKey,
//       "Content-Type": "application/json",
//   }
// };

    //const url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + nyc;
    console.log(url);
    const response = await fetch(url);
const data = await response.json();
  console.log(data); 
  return data;
}

 let nyc = prompt ("Okay, would you like to know the weather of a random place right now?: yes or no (please type in lowercase)?")
 
 if (nyc === 'yes'){
findWeather(nyc);

 } else if (nyc === "no"){
  console.log('Okay Bye Then!')
 };


