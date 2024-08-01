export type CommentsData = {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

export async function fetchComments(post: string): Promise<CommentsData[]> {
  const url = `https://jsonplaceholder.typicode.com/posts/${post}/comments`

  return await fetch(url).then(response => response.json())
}
