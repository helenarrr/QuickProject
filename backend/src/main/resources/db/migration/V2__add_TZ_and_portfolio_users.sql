ALTER TABLE users
    ADD COLUMN tz VARCHAR(3) not null default '+3';
ALTER TABLE users
    ADD COLUMN portfolio_link VARCHAR(255);