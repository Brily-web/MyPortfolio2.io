const kotak = document.getElementById("kotak");

for (let kBaru = 0; kBaru < 16; kBaru++) {
  const kBaru = document.createElement("div");
  kBaru.setAttribute(
    "style",
    "background-color: #76abae; height: 15px; width: 15px"
  );
  kBaru.classList.add("d-inline-block");
  kBaru.classList.add("mx-2");
  kotak.appendChild(kBaru);
}

const muncul = document.querySelector(".muncul");
const strip = document.querySelector(".strip");
const text = "FULL-STACK WEB DEVELOPER";

let index = 0;
// isAdding = true

// function playAnim() {
//   setTimeout(function () {
//     // set the text of typeText to a substring of
//     // the textToBeTyped using index.
//     muncul.innerText = text.slice(0, index);
//     if (isAdding) {
//       // adding text
//       if (index > text.length) {
//         // no more text to add
//         isAdding = false;
//         //break: wait 2s before playing again
//         setTimeout(function () {
//           playAnim();
//         }, 2000);
//         return;
//       } else {
//         // increment index by 1
//         index++;
//       }
//     } else {
//       // removing text
//       if (index === 0) {
//         // no more text to remove
//         isAdding = true;
//       } else {
//         // decrement index by 1
//         index--;
//       }
//     }
//     // call itself
//     playAnim();
//   }, 200);
// }
// // start animation
// playAnim();
halo = true;
function type() {
  muncul.innerHTML = text.slice(0, index);
  if (halo) {
    if(!strip.classList.contains('typing')){
      strip.classList.add("typing");
    }
    index++;
    if (index > text.length) {
      strip.classList.remove("typing");
      setTimeout(function(){
        halo = false;
      }, 760)
    }
  } else {

    setTimeout(() => {
      index--;
      strip.classList.add("typing");
      if(index === 0){
        halo = true
        type()
      }
    }, 1000);
  }
}
setInterval(type, 200);

function tombol() {
  document.body.classList.toggle("changebg");
  if (true) {
    document.querySelector(".muncul").classList.toggle("text-body-secondary");
    document.querySelector(".muncul").classList.toggle("text-black-50");
  }
}
