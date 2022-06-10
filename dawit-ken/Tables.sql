create table user_roles(
	role_id int primary key generated always as identity,
	role varchar(128) not null
);

create table users(
	user_id int primary key generated always as identity,
	username varchar(128),
	password varchar(128),
	first_name varchar(64),
	last_name varchar(128),
	email varchar(128),
	role int references user_roles(role_id) not null
);

create table reimbursement_status(
	status_id int primary key generated always as identity,
	status varchar(256)
);

create table reimbursement_type(
	type_id int primary key generated always as identity,
	type varchar(64)
);

create table reimbursement(
	reimbursement_id int primary key generated always as identity,
	amount money,
	submitted_date date,
	resolved_date date,
	description varchar(256),
	reimbursement_author int references users(user_id) not null,
	reimbursement_resolver int references users(user_id),
	reimbursement_status int references reimbursement_status(status_id) not null,
	reimbursement_type int references reimbursement_type(type_id) not null
);


