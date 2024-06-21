
import {UserButton} from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <section className={'flex flex-col items-center\n' +
            '    justify-center h-full w-full'}>
        <p>hello ai saas DashboardPage </p>
        <h3>protectedPage</h3>
            <UserButton afterSignOutUrl={'/'}/>
        </section>
    );
};
export default DashboardPage;