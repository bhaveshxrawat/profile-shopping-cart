const Header = () => {
    const item: number = 0;
    return (
        <header className="flex justify-between p-4 items-center mb-4">
            <h1 className="text-2xl font-bold">Products</h1>
            <button title="User's cart">
                <i className="block relative">
                    {item < 0 && <span className="count__badge">{item}</span>}
                    <svg
                        width="24px"
                        height="24px"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M22 12.5L21.1667 15M21.1667 15L20 18.5H15.5L14.5 15H21.1667Z"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M16.5 20.51L16.51 20.4989"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M19.5 20.51L19.51 20.4989"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </i>
            </button>
        </header>
    );
};

export default Header;
