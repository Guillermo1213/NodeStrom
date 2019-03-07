DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plan White Tee","Mens Clothing", 12.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Denim Jacket","Mens Clothing", 13.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Chinos","Mens Clothing", 10.99, 117);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Bomber Jacket","Womens Clothing", 12.99, 543);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rock Band Cut Tee","Womens Clothing", 13.99, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Light Denim Boyfriend Jeans","Womens Clothing", 10.99, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Skate Shoes","Shoes", 12.99, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Platforms","Shoes", 13.99, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("White Low Top Sneakers","Shoes", 10.99, 54);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Baseball Cap","Accessories", 10.99, 999);
