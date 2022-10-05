const balance = document.getElementById("balance");

const add_money = document.getElementById("addmoney");
const sub_money = document.getElementById("submoney");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
    { id:1, text: "Flower", amount:-20},
    { id:2, text: "Salaryr", amount:300},
    { id:3, text: "Book", amount:-10},
    { id:4, text: "Camera", amount:-50},
];

let Transactions = dummyTransactions;