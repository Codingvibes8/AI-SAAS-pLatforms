"use client"
import {Montserrat} from 'next/font/google'
import {cn} from "@/lib/utils";
import Link from "next/link";

import Image from 'next/image';
import {routes} from '@/app/constants/constants'

const montserrat= Montserrat({
    weight:'600',
    subsets:['latin']
})


const Sidebar = () => {
  return(
      <div className={'space-y-4 py-4 flex flex-col h-full bg-[111827] text-white'}>
          <div className={'py-2 px-3 flex-1'}>
              <Link href={'/dashboard'} className={'flex items-center pl-3 mb-14'}>
                  <div className={'relative w-8 h-8 mr-4'}>
                  <Image src='/box.svg' fill alt='logo-image'/>
                  </div>
                  <div className={cn("text-2xl font-bold", montserrat.className)}>
                      <h1>multi-ai platforms</h1>
                  </div>
              </Link>
              <div className='space-y-1'>
                  {routes.map((route) => (
                      <Link href={route.href} key={route.href}
                            className='text-sm group flex p-3 w-full justify-start font-medium
                                  cursor-pointer hover:text-white
                                    hover:bg-white/10 rounded-lg transition'>


                          <div className={'flex items-center flex-1 gap-4 cursor-pointer'}>
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