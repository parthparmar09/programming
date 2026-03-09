 CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username  VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(255) DEFAULT "/#",
)AUTO_INCREMENT = 1001;

CREATE TABLE tempusers(
	email varchar(255) not null,
    otp SMALLINT not null
);

CREATE TABLE posts (
  post_id INT PRIMARY KEY AUTO_INCREMENT,
  image_url VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
)AUTO_INCREMENT = 101;

CREATE TABLE likes (
  like_id INT PRIMARY KEY AUTO_INCREMENT,
  post_id INT ,
  user_id INT ,
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE comments (
  comment_id INT PRIMARY KEY AUTO_INCREMENT,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  post_id INT ,
  user_id INT ,
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

