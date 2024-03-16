create table if not exists users
(
    id uuid not null primary key,
    nickname varchar(100) ,
    email varchar(100) not null unique,
    telegram varchar(100) unique,
    phone varchar(15) unique,
    password varchar(80) not null,
    created_at timestamp not null,
    enable boolean not null default true,
    project_role varchar(300),
    user_role not null varchar(200),
    photo bytea
);

create table if not exists projects
(
    id uuid not null primary key,
    creator_id uuid not null,
    name varchar(100) not null,
    description varchar(1000) not null,
    enable boolean not null default true,
    created_at timestamp not null,
    closed_at timestamp,
    foreign key (creator_id) references users (id) on delete cascade
);

create unique index projects_unique_user_id_idx on projects (creator_id);

create table if not exists projects_roles
(
    id uuid not null primary key,
    name varchar(100) not null,
    description varchar(1000),
    project_id uuid not null,
    foreign key (project_id) references projects (id) on delete cascade
);

create table if not exists queue
(
    id uuid not null primary key,
    user_id uuid not null,
    project_role_id uuid not null,
    checked boolean default false,
    foreign key (user_id) references users (id) on delete cascade,
    foreign key (project_role_id) references projects_roles (id) on delete cascade,
    CONSTRAINT user_roles_idx UNIQUE (user_id, project_role_id)
);

create table if not exists journal
(
    id              uuid   not null primary key,
    user_id         uuid   not null,
    project_id      uuid   not null,
    project_role_id uuid   not null,
    adding_at       timestamp not null,
    finished_at     timestamp,
    foreign key (user_id) references users (id) on delete cascade,
    foreign key (project_id) references projects (id) on delete cascade,
    foreign key (project_role_id) references projects_roles (id) on delete cascade
)