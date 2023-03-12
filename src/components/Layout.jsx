import { NavLink, Outlet } from "react-router-dom";

const SetActive = ({isActive}) => {
    const active = isActive ? "font-bold bg-emerald-300 text-emerald-900" : '';
    return 'font-semibold ' + active;
}

const Layout = () => {
    return <>
        <header>
            <NavLink to="/" className={SetActive}>Дом</NavLink>
            <NavLink to="/blog" className={SetActive}>Блог</NavLink>
            <NavLink to="/about" className={SetActive}>О</NavLink>
        </header>
        <main >
            <Outlet />
        </main>
        <footer className=''>
            2023
        </footer>
    </>
}

export default Layout;