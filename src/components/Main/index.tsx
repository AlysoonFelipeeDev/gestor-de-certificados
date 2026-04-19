import styles from "./index.module.scss";

interface MainPops {
    children: React.ReactNode
}

export function Main ({children}: MainPops) {
    return (
        <main className={styles['app-layout']}>
            <section className={styles['app-section']}>
                {children}
            </section>
        </main>
    )
}