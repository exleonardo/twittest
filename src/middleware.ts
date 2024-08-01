import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get('loggedin' as any)
  const url = req.url

  if (!verify && url.includes('/posts')) {
    return NextResponse.redirect('https://twittest-git-main-exleonardos-projects.vercel.app/')
  }

  if (verify && url === 'https://twittest-git-main-exleonardos-projects.vercel.app/') {
    return NextResponse.redirect('https://twittest-git-main-exleonardos-projects.vercel.app/posts')
  }
}
