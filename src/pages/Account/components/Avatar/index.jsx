const Avatar = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    return ( 
        <div className="w-full px-8 pt-9 pb-10 rounded-xl bg-white dark:bg-white/[3%] sticky top-6 flex flex-col items-center gap-6">
            <div className="h-40 w-40 bg-primary-50 dark:bg-primary-500/[10%] rounded-full flex items-center justify-center text-5xl text-primary-500 font-bold">
                {(user.first_name && user.first_name.substr(0, 2).toUpperCase())}
            </div>
            <div className="flex flex-col gap-2 items-center">
                <span className="font-bold text-2xl text-gray-900 dark:text-gray-50">{user?.first_name} {user?.last_name}</span>
                <span className="text-sm text-gray-600">{user?.email}</span>
            </div>
        </div>
     );
}
 
export default Avatar;