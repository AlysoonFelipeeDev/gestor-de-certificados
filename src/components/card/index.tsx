import styles from './index.module.scss';
import { EstablishmentVisit } from "@/types"

type ClientCardProps =  {
    visit: EstablishmentVisit,
    updateSales: (value: number) => void,
    onClose: (id: string) => void
    openCard: (id: string) => void
}

export function ClientCard({visit, updateSales, onClose} : ClientCardProps){
    const isOpen = visit.statusCard === 'open'

    return (
        <>
            <article className={`${styles['client-card']} ${styles[isOpen ? 'client-card--open' : 'client-card--closed' ]}`}>
                <header className={styles['client-card__header']}>
                    <p className={styles['client-card__name']}>{visit.name}</p>
                    {isOpen 
                        ? <button className={styles['client-card__add-button']} type="button" aria-label="Adicionar venda">+</button>
                        : <span className={styles['client-card__badge']}>Vendido</span>
                    }
                </header>
                    {!isOpen 
                        ?  <p className={styles['client-card__meta']}>Vendas: {visit.sold} / Sobras: {visit.returned}</p> 
                        :  <section className={styles.counter} aria-label="Quantidade de vendidas e sobras">
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
                        }
            </article>
            
        </>
    )
}