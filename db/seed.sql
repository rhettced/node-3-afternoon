create table product (
    product_id SERIAL PRIMARY KEY not null,
    name VARCHAR(40) not null,
    description VARCHAR(80) not null,
    price INTEGER not null,
    image_url TEXT not null
);  