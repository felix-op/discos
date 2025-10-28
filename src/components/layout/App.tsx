import { useState } from "react";
import { Link, Outlet } from "react-router";

type NavItem = {
    title: string,
    mobileTitle: string,
    url: string,
};

const defaultValue = {
    title: "",
    mobileTitle: "",
    url: "",
};

const navItems: NavItem[] = [
    { title: "Configuración", mobileTitle: "Config", url: "config" },
    { title: "Cadena de pedidos", mobileTitle: "Pedidos", url: "pedidos" },
    { title: "Resultados de la simulación", mobileTitle: "Simulación", url: "resultados" },
];

export default function App() {
    const [selected, setSelected] = useState<NavItem>(navItems[0] || defaultValue);

    return (
        <div className="bg-background h-full">
            <header className="flex justify-start items-center w-full h-20 bg-header py-10 md:py-0">
                <h2 className="text-center pl-0 md:pl-20 text-4xl font-bold w-full md:flex">Simulador de Discos</h2>
            </header>
            <nav className="w-full h-20 md:h-10 bg-header pl-0 md:pl-20">
                <ul className="flex flex-row gap-0 text-sm sm:text-xl h-full">
                    {navItems && navItems.length && navItems.map((navItem) => (
                        <Link
                            key={navItem.url}
                            className={`
                                cursor-pointer hover:text-selected px-4
                                ${navItem.title===selected.title ? "border-b-4 border-selected" : ""}
                            `}
                            onClick={() => setSelected(navItem)}
                            to={navItem.url}
                        >
                            {navItem.title}
                        </Link>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}