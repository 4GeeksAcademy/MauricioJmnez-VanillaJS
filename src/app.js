/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#botón").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generarExcusa();
  });
  console.log("This is the final project!");
};

let generarExcusa = () => {
  let who = ["The dog", "My little brother", "The cat", "A racoon"];
  let action = ["bit", "stole", "puked on", "broke"];
  let what = [
    "my homework",
    "the internet modem",
    "my phone",
    "the birthday cake"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was showering"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
  //No sé por qué la última línea de código editada siempre se divide//
};
