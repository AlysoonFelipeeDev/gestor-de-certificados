'use client'

import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

interface Route {
    label: string,
    route: string
}

const routes: Route[] = [
    {label: 'Rota', route: '/rota'},
    {label: 'Painel', route: '/'},
    {label: 'Config', route: '/config'} 
]

export function Footer() {
    const currentRoute = usePathname()

    return (
            <footer className={styles['bottom-nav']} aria-label="Navegação principal">
                {routes.map(route => (
                    <button key={route.label} 
                        className={
                            currentRoute === route.route 
                            ? `${styles['bottom-nav__item']} ${styles['bottom-nav__item--active']}` 
                            : styles['bottom-nav__item'] 
                        }
                        type="button"
                        >
                        
                        {route.label}
                    </button>
                ))}
            </footer>
        )
}
