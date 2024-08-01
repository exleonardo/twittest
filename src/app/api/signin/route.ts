import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const { email, password } = await req.json()

  if (!email.includes('@') || !password || !email || email.trim() === '') {
    return NextResponse.json({ message: 'invalid email or password' }, { status: 422 })
  }

  return NextResponse.json({ message: 'success' })
}
