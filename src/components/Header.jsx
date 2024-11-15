import PropType from 'prop-types'; 

function Header({ onSearch }) {
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-rose-700">
                    Movie
                </h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">
                        Home
                    </a>
                    <a href="#" className="text-white">
                        About
                    </a>
                    <a href="#" className="text-white">
                        Contact
                    </a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-3 text-black"
                />
                <button
                    className="p-2 text-white bg-red-600"
                    onClick={() => onSearch('hit')}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

Header.propTypes = {
    onSearch: PropType.func,
};

export default Header;
