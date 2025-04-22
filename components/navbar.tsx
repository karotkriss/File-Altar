import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './theme-toggle'

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-5 px-6 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
      <aside className="flex items-center gap-[4px]">
        <p className='text-3xl font-Bold'>File Altar</p>
      </aside>
      <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href='#'>Supported Formats</Link>
          </li>
          <li>
            <Link href='#'>Resources</Link>
          </li>
          <li>
            <Link href='#'>Documentation</Link>
          </li>
          <li>
            <Link href='#'>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        {/* <ModeToggle /> */}
        <Link 
          href="/dashboard"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-100 bg-[linear-gradient(110deg,#000103,45%,#442f54,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">

          {true ? 'Dashboard' : 'Get Started'}
        </Link>
      
        {/* {true ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  )
}

export default Navbar