"use client"

import Link from 'next/link'
import LoadingIndicator from './LoadingIndicator'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 bg-white p-4 border-b border-gray-200 z-10">
      <nav className="flex gap-4">
        <Link href="/" className={`text-black ${pathname === '/' ? 'opacity-50' : 'opacity-100'}`}>
          Home <LoadingIndicator />
        </Link>
        <Link href="/dashboard" className={`text-black ${pathname === '/dashboard' ? 'opacity-50' : 'opacity-100'}`}>
          Dashboard <LoadingIndicator />
        </Link>
      </nav>
    </header>
  )
}