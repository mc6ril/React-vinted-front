import Navigation from './Navigation';

const Header = ({ userToken, setUser }) => {
    return (
        <header>
            <Navigation userToken={userToken} setUser={setUser} />
        </header>
    );
};

export default Header;
