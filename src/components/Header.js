import Navigation from './Navigation';

const Header = ({ userToken, setUser, setMenu, menu, value }) => {
    return (
        <header>
            <Navigation
                userToken={userToken}
                setUser={setUser}
                setMenu={setMenu}
                menu={menu}
                value={value}
            />
            <div className="separate"></div>
        </header>
    );
};

export default Header;
