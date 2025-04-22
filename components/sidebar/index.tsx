'use client'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constant'
import { usePathname } from 'next/navigation'
import React from 'react'
import { clsx } from 'clsx'
import { ModeToggle } from '../theme-toggle'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()
    return (
        <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link
                    className="flex text-center font-bold flex-row"
                    href='/'>
                    File Altar.
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link href={menuItem.href} className={clsx("group h-8 w-8 flex items-center justify-center rounded-lg p-[3px] scale-[1.5] cursor-pointer", { 'dark:bg-[#34273f] bg-[#241531]': pathName === menuItem.href })}>
                                            <menuItem.Component size="32" color="#ba68c8" variant="Bulk" />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent side='right' className='bg-black/10 backdrop-blur-xl'>
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
            </div>
            <div className="flex items-center justify-center flex-col">
                <ModeToggle />
            </div>
        </nav>
    )

}

export default MenuOptions