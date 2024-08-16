
import {UserButton} from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <section className='h-screen w-screen'>

            <p>hello ai saas DashboardPage </p>
            <h3>protectedPage</h3>
            <span> <UserButton />
            </span>
        </section>
);
};
export default DashboardPage;