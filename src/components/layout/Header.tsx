const Header = () => {
    
    return (
        <header className="w-full fixed top-0 flex justify-between items-center bg-header py-4 text-text1 p-5">
        <h1 className="text-2xl font-bold">EntrenaMe</h1>
        <div className="flex items-center space-x-4">


            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="/home" className="hover:text-text1_hover">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/activities" className="hover:text-text1_hover">
                            Actividades
                        </a>
                    </li>
                    <li>
                        <a href="/courts" className="hover:text-text1_hover">
                            Reservas
                        </a>
                    </li>
                    <li v-if="type_user === 'admin'">
                        <a href="/dashboard" className="hover:text-text1_hover">
                            Dashboard
                        </a>
                    </li>
                    <li v-if="!isLogged">
                        <a href="/auth" className="hover:text-text1_hover">
                            Login/Register
                        </a>
                    </li>
                    <li v-if="isLogged">
                        <a href="`/profile/${username}`"
                            className="flex items-center bg-color1 pr-2 hover:bg-color1_hover rounded-full overflow-hidden">
                            <img src="`../public/img/users/${img_user}`" alt="user image"
                                className="user-image mr-1 w-7 h-7 rounded-full"/>
                            <span className="text-sm text-white"> username</span>
                        </a>
                    </li>
                    <li v-if="isLogged">
                        <a href="/auth" className="hover:text-text1_hover">
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>

            {/* <nav v-else className="flex gap-4">
                <div className="w-20 h-1 bg-skeleton rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-skeleton rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-skeleton rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-skeleton rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-skeleton rounded-full animate-pulse"></div>
            </nav> */}
        </div>
    </header>
    );
    }
    
export default Header;