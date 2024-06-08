let btn1 = document.querySelector(".btn1");

let lion = document.querySelector(".lion");
let tiger = document.querySelector(".tiger");
let elephant = document.querySelector(".elephant");

tiger.style.display = "none";
elephant.style.display = "none";
btn1.style.transform = `translatey(-5px)`;

btn1.addEventListener("click" , () => {
    btn1.style.transform = `translatey(-5px)`;
    btn1.style.transition = `0.3s ease-in-out`;
    btn3.style.transform = `translatey(0px)`;
    btn2.style.transform = `translatey(0px)`;
    lion.style.display = "flex";
    tiger.style.display = "none";
    elephant.style.display = "none";

})

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  btn2.style.transform = `translatey(-5px)`;
  btn2.style.transition = `0.3s ease-in-out`;
  btn3.style.transform = `translatey(0px)`;
  btn1.style.transform = `translatey(0px)`;
  tiger.style.display = "flex";
  lion.style.display = "none";
  elephant.style.display = "none";
});

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  btn3.style.transform = `translatey(-5px)`;
  btn3.style.transition = `0.3s ease-in-out`;
  btn2.style.transform = `translatey(0px)`;
  btn1.style.transform = `translatey(0px)`;
  elephant.style.display = "flex";
  lion.style.display = "none";
  tiger.style.display = "none";
});




