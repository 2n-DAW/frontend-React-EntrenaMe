import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Panel de control</h2>
            <ul className="flex-grow">
                <li className="w-full mb-2">
                    <NavLink
                        to="/" 
                        className={({ isActive }) => 
                            `block w-full py-2 px-4 rounded transition-colors duration-200 overflow-hidden whitespace-nowrap text-left
                                ${isActive 
                                    ? "bg-gray-700 text-white" 
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }`
                        }
                    >
                        <span className="inline-block w-full">Inicio</span>
                    </NavLink>
                        
                    
                    
                    
                    <NavLink 
                        to="/sports" 
                        className={({ isActive }) => 
                            `block w-full py-2 px-4 rounded transition-colors duration-200 overflow-hidden whitespace-nowrap text-left
                                ${isActive 
                                    ? "bg-gray-700 text-white" 
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`
                        }
                    >
                        <span className="inline-block w-full">Lista de deportes</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;