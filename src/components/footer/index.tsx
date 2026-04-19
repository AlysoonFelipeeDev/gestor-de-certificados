'use client'

import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import Link from "next/link";
import { routes } from "@/constants/routes";

export function Footer() {
    const currentRoute = usePathname()

    return (
            <footer className={styles['bottom-nav']} aria-label="Navegação principal">
                {routes.map(route => (
                    <Link href={route.route}
                        key={route.label} 
                        className={
                            currentRoute === route.route 
                            ? `${styles['bottom-nav__item']} ${styles['bottom-nav__item--active']}` 
                            : styles['bottom-nav__item'] 
                        }
                        >
                        {route.label}
                    </Link>
                ))}
            </footer>
        )
}
