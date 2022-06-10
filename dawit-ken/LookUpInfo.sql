insert into user_roles (role) values ('User');
insert into user_roles (role) values ('Manager');
insert into reimbursement_status (status) values ('Pending');
insert into reimbursement_status (status) values ('Accepted');
insert into reimbursement_status (status) values ('Denied');
insert into reimbursement_type (type) values ('LODGING');
insert into reimbursement_type (type) values ('TRAVEL');
insert into reimbursement_type (type) values ('FOOD');
insert into reimbursement_type (type) values ('OTHER');

select * from user_roles;


drop table reimbursement;
drop table users;
drop table user_roles;
drop table reimbursement_status;
drop table reimbursement_type;

select * from reimbursement_status;

select * from reimbursement_type;