INSERT INTO users (id, email, password, created_at, project_role)
VALUES
    ('223e4567-e89b-12d3-a456-426614174000', 'test@test.com', '12345678', NOW(), 'Программист'),
    ('223e4567-e89b-12d3-a456-426614174001', 'designer@test.com', '123', NOW(), 'Дизайнер');

INSERT INTO projects (id, creator_id, name, description, enable, created_at)
VALUES
    ('123e4567-e89b-12d3-a456-426614174000', '223e4567-e89b-12d3-a456-426614174000', 'Project 1', 'Description of Project 1', true, NOW()),
    ('123e4567-e89b-12d3-a456-426614174001', '223e4567-e89b-12d3-a456-426614174001', 'Project 2', 'Description of Project 2', true, NOW());