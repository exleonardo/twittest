export const loginUser = async (email?: string, password?: string) => {
  const response = await fetch('/api/signin', {
    body: JSON.stringify({ email, password }),
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}
