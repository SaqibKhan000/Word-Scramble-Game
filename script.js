let words = [
   "apple", "banana", "cherry", "grape", "orange", "pineapple", "strawberry", "blueberry", "mango", "watermelon",
   "avocado", "peach", "plum", "kiwi", "pear", "apricot", "pomegranate", "fig", "melon", "papaya",
   "carrot", "broccoli", "cucumber", "tomato", "potato", "lettuce", "cabbage", "onion", "garlic", "spinach",
   "elephant", "giraffe", "tiger", "lion", "zebra", "panda", "rabbit", "monkey", "kangaroo", "cheetah",
   "table", "chair", "window", "door", "lamp", "sofa", "carpet", "curtain", "shelf", "clock",
   "laptop", "keyboard", "mouse", "monitor", "speaker", "microphone", "printer", "headphone", "tablet", "charger",
   "ocean", "river", "mountain", "desert", "valley", "canyon", "forest", "island", "beach", "volcano",
   "happy", "excited", "brave", "joyful", "friendly", "kind", "generous", "polite", "honest", "grateful",
   "coding", "developer", "programming", "javascript", "python", "website", "software", "frontend", "backend", "database",
   "travel", "adventure", "journey", "explore", "discover", "vacation", "holiday", "flight", "destination", "passport"
 ];

let arrWords = "";

function scramble(word){
   return word.split("").sort(() => Math.random() - 0.5).join("");
}


function next(){
   arrWords = words[Math.floor(Math.random() * words.length)];
   document.querySelector(".scrambleWord").innerText = scramble(arrWords);
   document.querySelector("input").value = "";
   document.querySelector(".result").innerText = "";
}


function check(){
   let result = document.querySelector(".result");
    let inputVal = document.querySelector("input").value.toLowerCase();
    if(inputVal === ""){
    result.innerText = "Please fill the required field ☝🏼";
    result.style.color = "orangered";
    }else{
      if(inputVal === arrWords){
         result.innerText = "Correct Answer ✅";
         result.style.color = "green";
      }else{
         result.innerText = "Wrong Answer ❌";
         result.style.color = "red";
      }
    }
}

next();