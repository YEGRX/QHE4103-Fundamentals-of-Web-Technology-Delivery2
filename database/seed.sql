-- Optional development seed data.
-- Demo seller credentials:
--   username: surpass01
--   password: drive2026

USE online_car_sale;

INSERT INTO sellers (
    name,
    address,
    phone,
    email,
    username,
    password_hash
) VALUES (
    'SURPASS Demo Seller',
    '88 Century Avenue, Shanghai',
    '13812345678',
    'seller@surpass.example',
    'surpass01',
    '$2y$10$fhTBLq1jv0ZjQpJr8ya8JejD847O9xJeJtSn/ZPrAccxs2kpw1wkO'
) ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    address = VALUES(address),
    phone = VALUES(phone),
    password_hash = VALUES(password_hash);

INSERT INTO cars (
    seller_id,
    brand,
    model,
    year,
    color,
    location,
    price,
    image_url,
    body_style,
    mileage,
    fuel,
    transmission,
    power,
    torque,
    acceleration,
    top_speed,
    drivetrain,
    seats,
    vehicle_condition,
    seller_type,
    market_note,
    featured,
    description
)
SELECT
    seller_id,
    'Ferrari',
    'Roma',
    2022,
    'Rosso Corsa',
    'Shenzhen',
    2580000.00,
    'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=1200&q=80',
    'Grand Touring Coupe',
    5200,
    'Petrol',
    '8-speed Dual-clutch',
    '612 hp',
    '760 Nm',
    '3.4 s 0-100 km/h',
    '320 km/h',
    'Rear-wheel drive',
    4,
    'Certified used',
    'Dealer listing',
    'Strong demand for low-mileage Roma coupes in coastal tier-one cities.',
    1,
    'A front-mid-engine coupe with elegant proportions and grand touring performance.'
FROM sellers
WHERE username = 'surpass01'
AND NOT EXISTS (
    SELECT 1
    FROM cars
    WHERE brand = 'Ferrari'
      AND model = 'Roma'
      AND year = 2022
      AND seller_id = sellers.seller_id
);

INSERT INTO cars (
    seller_id,
    brand,
    model,
    year,
    color,
    location,
    price,
    image_url,
    body_style,
    mileage,
    fuel,
    transmission,
    power,
    torque,
    acceleration,
    top_speed,
    drivetrain,
    seats,
    vehicle_condition,
    seller_type,
    market_note,
    featured,
    description
)
SELECT
    seller_id,
    'Porsche',
    '911 Carrera S',
    2024,
    'GT Silver Metallic',
    'Shanghai',
    1768000.00,
    'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    'Sports Coupe',
    1800,
    'Petrol',
    '8-speed PDK',
    '443 hp',
    '530 Nm',
    '3.7 s 0-100 km/h',
    '308 km/h',
    'Rear-wheel drive',
    4,
    'Nearly new',
    'Dealer listing',
    'High-spec 911 examples remain especially liquid in the premium used market.',
    1,
    'A precise rear-engine sports coupe with everyday usability and strong resale demand.'
FROM sellers
WHERE username = 'surpass01'
AND NOT EXISTS (
    SELECT 1
    FROM cars
    WHERE brand = 'Porsche'
      AND model = '911 Carrera S'
      AND year = 2024
      AND seller_id = sellers.seller_id
);
