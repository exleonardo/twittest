import { PostData } from '@/helpers/post'

export async function fetchPosts(page: number): Promise<PostData[]> {
  const pageSize = 10 // Количество постов на странице
  const start = (page - 1) * pageSize
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${pageSize}`

  return await fetch(url).then(response => response.json())
}
