create table if not exists users
(
    id integer not null primary key,
    login varchar(100) not null,
    nickname varchar(100) ,
    email varchar(100) not null,
    telegram varchar(100) not null,
    phone varchar(15) ,
    password varchar(30) not null,
    created_at timestamp not null,
    enable BOOLEAN not null,
    project_role varchar(300) not null,
    photo bytea
);
CREATE UNIQUE INDEX users_unique_email_login_telegram_idx ON users (email,login,telegram);

create table if not exists projects
(
    id integer not null primary key,
    user_id integer not null,
    name varchar(100) not null,
    description varchar(1000) not null,
    enable boolean not null,
    created_at timestamp not null,
    closed_at timestamp not null,
    foreign key (user_id) references users (id) on delete cascade
);

create unique index projects_unique_user_id_idx on projects (user_id);

create table if not exists projects_roles
(
    id integer not null primary key,
    name varchar(100) not null,
    description varchar(1000),
    project_id int not null,
    foreign key (project_id) references projects (id) on delete cascade
);

create table if not exists queue
(
    user_id integer not null,
    project_role_id integer not null,
    checked boolean default false,
    foreign key (user_id) references users (id) on delete cascade,
    foreign key (project_role_id) references projects_roles (id) on delete cascade,
    CONSTRAINT user_roles_idx UNIQUE (user_id, project_role_id)
);

create table if not exists journal
(
    id              integer   not null primary key,
    user_id         integer   not null,
    project_id      integer   not null,
    project_role_id integer   not null,
    adding_at       timestamp not null,
    finished_at     timestamp not null,
    foreign key (user_id) references users (id) on delete cascade,
    foreign key (project_id) references projects (id) on delete cascade,
    foreign key (project_role_id) references projects_roles (id) on delete cascade
)