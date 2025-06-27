type Post = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

type Comment = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};

const API_BASE = 'https://gorest.co.in/public/v2';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_BASE}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

export const fetchPostDetails = async (postId: number): Promise<Post> => {
  const response = await fetch(`${API_BASE}/posts/${postId}`);
  if (!response.ok) throw new Error(`Failed to fetch post ${postId}`);
  return response.json();
};

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(`${API_BASE}/posts/${postId}/comments`);
  if (!response.ok) throw new Error(`Failed to fetch comments for post ${postId}`);
  return response.json();
};