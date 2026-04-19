import styles from "./page.module.scss";

export default function Route() {
    return (
        <section className={styles.route} aria-label="Conteúdo da rota">
            <article className={styles.selector} aria-label="Selecionar rota">
                <p className={styles.selector__text}>Rota: Centro</p>
                <span className={styles.selector__icon}></span>
            </article>

            <article className={styles['client-card client-card--closed']}>
                <header className={styles['client-card__header']}>
                <p className={styles['client-card__name']}>Bar do Zé</p>
                <span className={styles['client-card__badge']}>Vendido</span>
                </header>
                <p className={styles['client-card__meta']}>Vendas: 50 / Sobras: 10</p>
            </article>

            <article className={styles['client-card client-card--open']}>
                <header className={styles['client-card__header']}>
                <p className={styles['client-card__name']}>Padaria Central</p>
                <button className={styles['client-card__add-button']} type="button" aria-label="Adicionar venda">
                    +
                </button>
                </header>

                <section className={styles.counter} aria-label="Formulário de vendas">
                <header className={styles.counter__header}>
                    <p className={styles.counter__label}>Vendidas</p>
                    <p className={styles.counter__label}>Sobras</p>
                </header>

                <div className={styles.counter__values}>
                    <p className={styles.counter__value}>0</p>
                    <p className={styles.counter__value}>0</p>
                </div>

                <div className={styles.counter__actions}>
                    <button className={styles.counter__button} type="button">
                    +1
                    </button>
                    <button className={styles['counter__button--muted']} type="button">
                    -1
                    </button>
                    <button className={styles.counter__button} type="button">
                    +10
                    </button>
                    <button className={styles['counter__button--muted']} type="button">
                    -10
                    </button>
                </div>
                </section>
            </article>
        </section>
    )
}