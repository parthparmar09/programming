
-- Dummy data for posts
INSERT INTO posts (content, image_url, user_id) VALUES
('Content of Post 1', '/#', 1001),
('Content of Post 4', '/#', 1001),
('Content of Post 2', '/#', 1002),
('Content of Post 5', '/#', 1002),
('Content of Post 3', '/#', 1003),
('Content of Post 6', '/#', 1003);


-- Dummy data for likes
INSERT INTO likes (post_id, user_id) VALUES
(101, 1001),(101, 1002),(101, 1003),(101, 1004),(101, 1005),
(102, 1001),(102, 1002),(102, 1005),
(103, 1002),(103, 1003),(103, 1004),(103, 1005),
(104, 1001),(104, 1002),(104, 1004),(104, 1005),
(105, 1001),(105, 1002),(105, 1003),(105, 1004),(105, 1005),
(106, 1001),(106, 1002);

-- Dummy data for comments
INSERT INTO comments (content, post_id, user_id) VALUES
('Comment on Post 1 by User 1001', 101, 1001),
('Comment on Post 1 by User 1002', 101, 1002),
('Comment on Post 1 by User 1003', 101, 1003),
('Comment on Post 1 by User 1004', 101, 1004),
('Comment on Post 1 by User 1005', 101, 1005),
('Comment on Post 2 by User 1001', 102, 1001),
('Comment on Post 2 by User 1002', 102, 1002),
('Comment on Post 2 by User 1003', 102, 1003),
('Comment on Post 2 by User 1003', 102, 1003),
('Comment on Post 2 by User 1004', 102, 1004),
('Comment on Post 2 by User 1005', 102, 1005),
('Comment on Post 2 by User 1005', 102, 1005),
('Comment on Post 3 by User 1002', 103, 1002),
('Comment on Post 3 by User 1003', 103, 1003),
('Comment on Post 3 by User 1005', 103, 1005),
('Comment on Post 4 by User 1001', 104, 1001),
('Comment on Post 4 by User 1002', 104, 1002),
('Comment on Post 4 by User 1003', 104, 1003),
('Comment on Post 4 by User 1003', 104, 1003),
('Comment on Post 4 by User 1003', 104, 1003),
('Comment on Post 5 by User 1001', 105, 1001),
('Comment on Post 5 by User 1005', 105, 1005),
('Comment on Post 6 by User 1001', 106, 1001),
('Comment on Post 6 by User 1001', 106, 1001),
('Comment on Post 6 by User 1002', 106, 1002),
('Comment on Post 6 by User 1002', 106, 1002),
('Comment on Post 6 by User 1003', 106, 1003),
('Comment on Post 6 by User 1003', 106, 1003),
('Comment on Post 6 by User 1004', 106, 1004),
('Comment on Post 6 by User 1005', 106, 1005);