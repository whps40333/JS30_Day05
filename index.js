const panels = document.querySelectorAll(".panel");
// const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  //console.log('Hello');
  this.classList.toggle("open");
  //this.classList.toggle('open-active');
}

// function toggleOpen(){
//   this.classList.toggle("open");
// }

// function toggleActive(e){
//   if(e.propertyName.includes("flex")){
//     this.classList.toggle("open-active")
//   }
// }

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// panels.forEach((panel)=>panel.addEventListener("click",toggleOpen))

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

// panels.forEach((panel)=>panel.addEventListener("click",toggleActive))
