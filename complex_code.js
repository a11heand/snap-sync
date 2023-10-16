/*
Filename: complex_code.js
Description: This code demonstrates a complex system for managing and tracking inventory using advanced techniques in JavaScript programming.
*/

// Define a class for representing a product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  calculateTotalCost() {
    return this.price * this.quantity;
  }
}

// Define a class for representing an inventory system
class Inventory {
  constructor() {
    this.products = [];
  }
  
  addProduct(product) {
    this.products.push(product);
  }
  
  removeProduct(productName) {
    this.products = this.products.filter(product => product.name !== productName);
  }
  
  getTotalCost() {
    let totalCost = 0;
    for (const product of this.products) {
      totalCost += product.calculateTotalCost();
    }
    return totalCost;
  }
  
  getProductCount() {
    return this.products.length;
  }
  
  getProductNames() {
    return this.products.map(product => product.name);
  }
}

// Create an instance of Inventory
const inventory = new Inventory();

// Add products to the inventory
inventory.addProduct(new Product('Smartphone', 500, 10));
inventory.addProduct(new Product('Laptop', 1000, 5));
inventory.addProduct(new Product('Headphones', 100, 20));

// Remove a product from the inventory
inventory.removeProduct('Laptop');

// Get the total cost of the inventory
const totalCost = inventory.getTotalCost();
console.log('Total cost of products:', totalCost);

// Get the number of products in the inventory
const productCount = inventory.getProductCount();
console.log('Number of products:', productCount);

// Get the names of all products in the inventory
const productNames = inventory.getProductNames();
console.log('Product names:', productNames);