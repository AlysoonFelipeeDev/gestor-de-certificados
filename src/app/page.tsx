import styles from "./page.module.scss";

interface Card {
    label: string,
    value: number
}

const cards: Card[] = [
    {label: "Comissão", value: 120.00},
    {label: "Vendas", value: 200.00},
    {label: "A depositar", value: 80.00}
]

export default function Home(){
    return (
        <section className={styles.summary} aria-label="Resumo do dia">
            <h2 className={styles.summary__title}>Resumo último sábado (05/04)</h2>

            <article className={styles.card}>
                <p className={styles.card__label}>Total vendido</p>
                <p className={styles.card__value}>R$ 1.200,00</p>
            </article>

            <section className={styles.summary__row} aria-label="Indicadores financeiros">
                {cards.map(card => (
                    <article key={card.label} className={styles.card}>
                        <p className={styles.card__label}>{card.label}</p>
                        <p className={styles.card__value}>R$ {card.value},00</p>
                    </article>
                ))}
            </section>
        </section>
    )
}

