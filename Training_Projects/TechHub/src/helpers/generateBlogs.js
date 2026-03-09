import { categories } from "@constants";

const authors = [
  "Amit Patel",
  "Sneha Gupta",
  "Raj Singh",
  "Neha Kapoor",
  "Anuj Sharma",
];

const predefinedComments = [
  "Great post!",
  "Very informative!",
  "Thanks for sharing!",
  "Excellent content!",
  "Really helpful!",
];

const generateRandomContent = () => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  return loremIpsum.repeat(50);
};

const generateRandomTitle = (category) => {
  return `Exploring ${category}`;
};

const generateRandomComments = () => {
  const comments = [];
  const commentsCount = Math.floor(Math.random() * 10);
  for (let i = 0; i < commentsCount; i++) {
    const comment =
      predefinedComments[Math.floor(Math.random() * predefinedComments.length)];
    comments.push({
      id: `${i + 1}`,
      userId: `user${i + 1}`,
      username: `User${i + 1}`,
      comment,
      timestamp: new Date().toISOString(),
    });
  }
  return comments;
};

const generateRandomLikes = () => Math.floor(Math.random() * 20);
const generateRandomBlog = () => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const author = authors[Math.floor(Math.random() * authors.length)];
  return {
    id: Math.floor(Math.random() * 1000),
    coverUrl: "https://source.unsplash.com/random?technology,programming",
    timestamp: new Date().toISOString(),
    title: generateRandomTitle(category),
    content: generateRandomContent(),
    author,
    category,
    likes: generateRandomLikes(),
    comments: generateRandomComments(),
  };
};

export const generateBlogs = (num) => {
  const blogs = [];
  for (let i = 0; i < num; i++) {
    blogs.push(generateRandomBlog());
  }

  return blogs;
};
