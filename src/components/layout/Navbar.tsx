import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white w-40 min-h-screen p-4 flex flex-col fixed">
            <ul className="flex-grow mt-16">
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
                        <span className="inline-block w-full">Deportes</span>
                    </NavLink>
                    
                    
                    <NavLink 
                        to="/courts-hours" 
                        className={({ isActive }) => 
                            `block w-full py-2 px-4 rounded transition-colors duration-200 overflow-hidden whitespace-nowrap text-left
                                ${isActive 
                                    ? "bg-gray-700 text-white" 
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`
                        }
                    >
                        <span className="inline-block w-full">Horas Pistas</span>
                    </NavLink>
                    
                    
                    <NavLink 
                        to="/activities" 
                        className={({ isActive }) => 
                            `block w-full py-2 px-4 rounded transition-colors duration-200 overflow-hidden whitespace-nowrap text-left
                                ${isActive 
                                    ? "bg-gray-700 text-white" 
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`
                        }
                    >
                        <span className="inline-block w-full">Actividades</span>
                    </NavLink>
                    
                    
                    
                    
                    
                    
                    
                    
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;