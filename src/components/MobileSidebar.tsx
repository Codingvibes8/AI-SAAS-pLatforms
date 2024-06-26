 "use client"

import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {SheetTrigger,Sheet,SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";


export const MobileSidebar = () => {

    return (
  <Sheet>
            <SheetTrigger>
                <Button variant={'ghost'} size={'icon'} className={'md:hidden'}>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <Sidebar/>
            </SheetContent>
        </Sheet>


    );
};
export default MobileSidebar