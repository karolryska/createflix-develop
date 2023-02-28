import { Link } from 'react-router-dom';

interface INavbarProps {
    /**
     * Elements displayed in Navbar
     */
    elements: string[];
}

export default function Navbar({ ...props }: INavbarProps) {
    const { elements } = props;
    const navigationList = elements.map((e) => (
        <li>
            <Link to={`/${e.toLocaleLowerCase().replaceAll(' ', '-')}`}>{e}</Link>
        </li>
    ));

    return (
        <nav className={['Navbar'].join(' ')}>
            <ul className={['flex', 'items-center', 'space-x-8'].join(' ')}>{navigationList}</ul>
        </nav>
    );
}
