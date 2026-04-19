import styles from "./index.module.scss";

export function Header() {
    return (
        <header className={styles.topbar}>
            <button className={styles['topbar__icon-button']} type="button" aria-label="Abrir menu">
                ☰
            </button>
            <h1 className={styles.topbar__title}>Dashboard</h1>
            <button className={styles['topbar__icon-button']} type="button" aria-label="Notificações">
                🔔
            </button>
        </header>
    )
}

