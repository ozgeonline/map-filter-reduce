import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import emojipedia from './emojipedia';
import reportWebVitals from './reportWebVitals';


//! ----- MAP -----
var Numbers = [3,56,2,48,5];
const mapNumbers = Numbers.map(function(x){
  return x *10;
})
console.log("new numbers",mapNumbers)

//! ----- FILTER -----
// var filterNumber = [];
// Numbers.forEach(function(num){
//   if(num>10){
//     filterNumber.push(num)
//   }
// })
const filterNumber = Numbers.filter(function(num){
  return num > 10;
})
console.log("filter numbers",filterNumber);

//! ----- REDUCE -----
// var newNumber = 0;
// Numbers.forEach(function(currentNumber){
//   newNumber += currentNumber;
// })
let newNumber= Numbers.reduce(function(accumulatedValue, currentValue){
  console.log("accumulator = " + accumulatedValue);
  console.log("currentNumber = " + currentValue);
  return accumulatedValue + currentValue
})
console.log("reduce", newNumber);

//! ----- FIND -----
const findNumber = Numbers.find(function(num){
  return num > 10;
})
console.log("findNumber = " + findNumber)

//! -----FINDINDEX -----
const indexFindNumber = Numbers.findIndex((num)=>{return (num > 10)})
console.log("findIndex = " + indexFindNumber);

//! -----emoji-----
const emojiMap = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0,100)+"...";
})
console.log(emojiMap);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

  </React.StrictMode>
);

reportWebVitals();
