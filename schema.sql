drop database friendFinder;
create database friendFinder;
use friendFinder;
create table friends (
id int not null auto_increment primary key,
friendName varchar(30) not null,
friendPic varchar(300) not null,
q1 int,
q2 int,
q3 int,
q4 int,
q5 int,
q6 int,
q7 int,
q8 int,
q9 int,
q10 int
);

use friendFinder;
insert into friends (friendName, friendPic, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
values ("Tobey", "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/31957246_10211729999381164_7299173761364787200_n.jpg?_nc_cat=0&oh=78fc2855f51f1e65ef5784f7851f6f51&oe=5B8B00FB", 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);

SELECT * FROM friends;