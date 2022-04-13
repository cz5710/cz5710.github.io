CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `fullname` varchar(255) NOT NULL,
 `email` varchar(255) NOT NULL,
 `password` varchar(255) NOT NULL,
 `status` int(11) NOT NULL DEFAULT 1 COMMENT '1=Active|0=Inactive',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`fullname`, `email`, `password`, `status`) VALUES
('John Doe', 'john.doe@example.com', MD5('123456'), 1),
('Sam Doe', 'sam.doe@example.com', MD5('123456'), 0);