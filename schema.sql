CREATE DATABASE fin15;
USE fin15;

CREATE TABLE `User` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR( 255) NOT NULL,
  `last_name` VARCHAR( 255 ) NOT NULL,
  `email` VARCHAR( 255 ) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  `created` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);

