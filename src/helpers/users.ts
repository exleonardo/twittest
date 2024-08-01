type UsersData = {
  address: {
    city: string
    geo: {
      lat: string
      lng: string
    }
    street: string
    suite: string
    zipcode: string
  }
  company: {
    company: {
      bs: string
      catchPhrase: string
      name: string
    }
    phone: string
    website: string
  }
  email: string
  id: number
  name: string
  username: string
}

export async function fetchUser(userId: number): Promise<UsersData> {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`

  return await fetch(url).then(response => response.json())
}
