import Profile from "./components/Profile";
import Password from "./components/Password";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Subscriptions from "./components/Subscriptions";

const Account = () => {
    return ( 
        <div className="w-full min-h-screen bg-black/[6%] dark:bg-primary-950 pb-16">
            <Header />

            <section className="mt-16">
                <div className="max-w-[1096px] m-auto px-6">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-start-1 col-end-5 relative">
                            <Avatar />
                        </div>
                        <div className="col-end-13 col-span-7">
                            <div className="flex flex-col gap-12">
                                <Profile />
                                <Password />
                                <Subscriptions />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Account;