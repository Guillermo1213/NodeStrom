require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var key = require("./key.js");
var db_password = (key.db_password);
var item;
var qty;
var cost;
var totalCost;
var purchased;
var newQty;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: db_password,
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    console.log("Thank you for coming to NodeStrom!\nOne sec! We're grabbing all products... \n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        getItem();
    });
}

function getItem() {
    inquirer
        .prompt(
            {
                name: "itemToBuy",
                message: "Which of these items would you like to buy? (Type in item_id)"
            })
        .then(function (answers) {
            item = answers.itemToBuy
            requested();
        });
}

function requested() {
    inquirer
        .prompt(
            {
                name: "requested",
                message: "Love it! How many would you like to buy?"
            })
        .then(function (answers) {
            console.log("Checking available quantity...\n");
            purchased = answers.requested
            getQty();
        });
}

function getQty() {
    connection.query("SELECT * FROM products WHERE ?", { item_id: item }, function (err, res) {
        if (err) throw err;
        cost = res[0].price;
        totalCost = (cost * purchased);
        qty = res[0].stock_quantity;
        newQty = (qty - purchased);
        if (newQty > 0) {
            transaction();
        } else if (newQty <= 0) {
            console.log("Sorry, we don't currently have the invtentory to fulfill this order..\n Please try again soon!\n");
            connection.end();
        }
    });
}

function transaction() {
    console.log("Processing transaction\n");
    console.log("Your total is: $" + totalCost);
    connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newQty },{item_id: item}], function (err) {
        if (err) throw err;
    });
    connection.end();
}