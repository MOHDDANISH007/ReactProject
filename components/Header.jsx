import Mode from "./Mode";

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <h2 className="title">
                    <a href="/">Where in the world?</a>
                </h2>
                <Mode />
            </div>
        </header>
    );
}

export default Header;
