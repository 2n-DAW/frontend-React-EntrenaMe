import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header className="w-full fixed top-0 flex justify-between items-center bg-header py-4 text-text1 p-5">
                <h1 className="text-2xl font-bold">EntrenaMe</h1>
                <div className="flex items-center space-x-4">
                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-text1_hover" to="/">Activities</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>

    )
}

export default Header