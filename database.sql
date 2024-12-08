CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) UNIQUE NOT NULL,
    priority INT NOT NULL,
    category VARCHAR(255) NOT NULL,
    due_date DATE NOT NULL,
    completion_status VARCHAR(255) NOT NULL

);
