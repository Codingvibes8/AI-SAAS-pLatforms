"use client"
import {Montserrat} from 'next/font/google'
import {cn} from "@/lib/utils";
import Link from "next/link";

import Image from 'next/image';

import {routes} from '@/constants/data'

const montserrat= Montserrat({
    weight:'600',
    subsets:['latin']
})


const Sidebar = () => {
  return(
      <div className={'space-y-4 py-4 flex flex-col h-full bg-slate-300 text-white'}>
          <div className={'py-2 px-3 flex-1'}>
              <Link href={'/dashboard'} className={'flex items-center mb-14 gap-x-1'}>
                  <div className={'relative w-8 h-8'}>
                  <Image src='/box.svg' fill alt='logo-image'/>
                  </div>
                  <div className={cn("text-2xl font-bold", montserrat.className)}>
                      <h1 className={'text-green-800'}>Maxim  AI</h1>
                  </div>
              </Link>
              <div className='space-y-1'>
                  {routes.map((route) => (
                      <Link href={route.href}
                            key={route.href}
                            className='text-lg text-black group flex p-3 w-full justify-start font-medium cursor-pointer group-hover:text-gray-800 rounded-lg transition'>
                          <div className={'flex items-center flex-1 gap-4'}>
                              <route.icon className={cn('w-5 h5 ml-3',route.color)}/>
                               {route.label}
                          </div>
                      </Link>
                  ))}

              </div>
          </div>
      </div>
  )
}
export default Sidebar


