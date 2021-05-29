let navLinks = {
   "About": "#about",
   "Projects" : "#projects",
   "Contact" : "#contact"
}

let nav = document.querySelector(".nav-links");
for (let link in navLinks){
   let newLink = document.createElement("li");
   let tag = document.createElement("a");
   tag.setAttribute("href", navLinks[link]);
   tag.innerText = link;
   newLink.appendChild(tag);
   nav.appendChild(newLink);
}

// let colors = ["#83B799", "#E2CD6D", "#E86F68"];

let colors = ["#A2BDA7", "#FBB760", "#F1765C"];

let popUpText = document.querySelector(".pop-up-text");
let myName = document.querySelector(".my-name");

let randomColor = (colors) => {
  let rndNum = Math.floor(Math.random() * 3);
  let rndColor = colors[rndNum];
  return rndColor;
}

document.querySelectorAll(".title").forEach(item => {
      let txt = item.innerHTML; 
      html = "";
      for (let i = 0; i < txt.length; i++){
        let rndColor = randomColor(colors);
        html += "<span style=color:" + rndColor + ">" + txt.charAt(i) + "</span>"; 
      }
      item.innerHTML = html; //set the html to each letter
}); 

let colorTextChange = () => {
  let text = document.getElementsByClassName("title")[0].childNodes;
  text.forEach(letter => {
    letter.style.color = randomColor(colors);
  });
}

setInterval(function(){
  colorTextChange();
}, 500);


