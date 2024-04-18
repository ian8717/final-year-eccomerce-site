-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
-- create one user

-- Create products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    image_path VARCHAR(255) -- Assuming the path to the image file will be stored here
);

INSERT INTO products (name, price, quantity, image_path)
VALUES
    ('Alabaster', 1200, 10, 'images/7.PNG.jpg'),
    ('Bistro', 1200, 15, 'images/products/distro.jpeg'),
    ('Carlton', 2200, 8, 'images/2.jpg'),
    ('Chandeliers', 3000, 5, 'images/3.PNG.jpg'),
    ('Durham', 3200, 12, 'images/4.PNG.jpg'),
    ('Elstead', 1200, 20, 'images/5.PNG.jpg');

    CREATE TABLE booking_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    need_fixtures ENUM('yes', 'no') NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL
);

CREATE TABLE contact_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE checkout_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total_price DECIMAL(10, 2) NOT NULL,
    total_quantity INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



