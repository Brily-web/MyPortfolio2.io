
const kotak = document.getElementById('kotak');



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

const muncul = document.querySelector('.muncul');

const text = "FULL-STACK WEB DEVELOPER";

let index = 0

function anim() {
  muncul.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0
  }
}
setInterval(anim, 350);

function tombol (){
  document.body.classList.toggle('changebg')
  if (true){
    document.querySelector('.muncul').classList.toggle('text-body-secondary');
    document.querySelector('.muncul').classList.toggle('text-black-50');

  }
}




