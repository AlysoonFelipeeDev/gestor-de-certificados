'use client';
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import { routes } from "@/constants/routes";
import Link from "next/link";


export function Header() {
    const pathName =  usePathname()
    const currentPage = routes.find(rout => rout.route === pathName)
    const isHome = pathName === '/'

    return (
        <header className={styles.topbar}>
            {isHome 
                ? <button className={styles['topbar__icon-button']} type="button" aria-label="Abrir menu">☰</button> 
                : <Link href={'/'}className={styles['topbar__icon-button']} aria-label="Voltar para Painel">⬅</Link>
            }
            <h1 className={styles.topbar__title}>{currentPage?.label ?? 'Página não encontrada'}</h1>
            <button className={styles['topbar__icon-button']} type="button" aria-label="Notificações">
                🔔
            </button>
        </header>
    )
}

