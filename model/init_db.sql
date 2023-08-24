DROP TABLE if exists `ratings`;


CREATE TABLE `ratings`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `movie_name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `rating` TEXT NOT NULL,
    PRIMARY KEY(`id`)
);

INSERT INTO `ratings` (`movie_name`, `image`, `rating`) VALUES
    ('Lord of the Rings', 'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80', '4'),
    ('Kill Bill', 'https://images.unsplash.com/photo-1539722602166-58d4a1e3b524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '5'),
    ('Soul', 'https://lumiere-a.akamaihd.net/v1/images/image_fd982a10.jpeg?region=0,0,648,972', '5');
