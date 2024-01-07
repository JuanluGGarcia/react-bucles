const menuLinks = ['home', 'about', 'blog', 'contact']

const Menu = () => {
    return <nav>
        <ul>
            <li>
                <a href="#">{menuLinks[0]}</a>
            </li>
            <li>
                <a href="#">{menuLinks[1]}</a>
            </li>
            <li>
                <a href="#">{menuLinks[2]}</a>
            </li>
            <li>
                <a href="#">{menuLinks[3]}</a>
            </li>
        </ul>
    </nav>
};

export default Menu;
