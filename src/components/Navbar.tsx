import {Button } from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";


const Navbar =()=>{
    return(
        <div className={'flex items-center p-4'}>
       <Button variant={'ghost'} size={'icon'} className={'md:hidden'}>
   <MobileSidebar/>
        </Button>
        <div className={'w-full flex justify-end'}>
            <UserButton afterSignOutUrl={'/'}/>
        </div>
    </div>)
}
export default Navbar