import Navigation from './Navigation';

const Header = ({ userToken, setUser, setMenu, menu }) => {
    return (
        <header>
            <Navigation
                userToken={userToken}
                setUser={setUser}
                setMenu={setMenu}
                menu={menu}
            />
            <div className="separate"></div>
        </header>
    );
};

export default Header;
