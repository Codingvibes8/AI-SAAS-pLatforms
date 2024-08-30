


"use client"
import { usePathname } from 'next/navigation'
import {Montserrat} from 'next/font/google'
import Link from "next/link";
import Image from 'next/image';
import {routes} from '@/constants/data'
import {cn} from "@/lib/utils";



const montserrat= Montserrat({
    weight:'600',
    subsets:['latin']
})


const Sidebar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return(
      <div className={'space-y-4 py-4 flex flex-col h-full bg-slate-300 text-white'}>
          <div className={'py-2 px-3 flex-1'}>
              <Link href={'/dashboard'} className={'flex items-center mb-14 gap-x-1'}>
                  <div className={'relative w-8 h-8'}>
                  <Image src='/box.svg' fill alt='logo-image'/>
                  </div>
                  <div className={cn("text-3xl font-bold", montserrat.className)}>
                      <h1 className={'text-green-800'}>Maxim  AI</h1>
                  </div>
              </Link>
          </div>
              <div className='space-y-1 w-full group'>
                  {routes.map((route) => (
                      <Link href={route.href}
                            key={route.href}
                            className={`${pathname === routes.href} ? 'text-lg text-black p-3 w-full justify-start font-medium transition-all cursor-pointer'
                           : 'text-gray-600 bg-yellow-400'`}>
                          <div className={'flex items-center flex-1 gap-4'}>
                              <route.icon className={cn('w-5 h5 ml-3',route.color)}/>
                               {route.label}
                          </div>
                      </Link>
                  ))}

              </div>
          </div>

  )
}
export default Sidebar









