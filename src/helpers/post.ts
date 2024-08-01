export type PostData = {
  body: string
  id: number
  title: string
  userId: number
}

export async function fetchPost(post: string): Promise<PostData> {
  const url = `https://jsonplaceholder.typicode.com/posts/${post}`

  return await fetch(url).then(response => response.json())
}
