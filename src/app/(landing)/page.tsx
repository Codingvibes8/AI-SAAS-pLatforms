
import {Button} from "@/components/ui/button";
import Link from "next/link";


const LandingPage = () => {
    return (<>
        <p>landing page</p>

            <div className='flex items-center gap-4'>
      <Link href='/sign-in'>
         <Button>Login</Button>
      </Link>
        <Link href='/sign-up'>
            <button>register</button>
        </Link>

</div>;
    </>)
};
export default LandingPage;