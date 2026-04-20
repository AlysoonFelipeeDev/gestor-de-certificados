'use client'

import { useState } from 'react';
import styles from './index.module.scss';
import { EstablishmentVisit } from "@/types"

type ClientCardProps =  {
    visit: EstablishmentVisit,
    updateSales: (value: number) => void,
    onClose: (id: string) => void
    openCard: (id: string) => void
}

export function ClientCard({visit, updateSales, onClose, openCard} : ClientCardProps){
    const isOpen = visit.statusCard === 'open'
    const [ certificatesSold, setCertificatesSold ] = useState(0)
    const [ certificatesReturned, setCertificatesReturned ] = useState(0)


    return (
            <article className={`${styles['client-card']} ${styles[isOpen ? 'client-card--open' : 'client-card--closed' ]}`}>
                <header className={styles['client-card__header']}>
                    <p className={styles['client-card__name']}>{visit.name}</p>
                    {isOpen 
                        ? <button className={styles['client-card__add-button']} type="button" aria-label="Adicionar venda">+</button>
                        : <span className={styles['client-card__badge']}>visitado</span>
                    }
                </header>
                    {!isOpen 
                        ?  <div>
                                <p className={styles['client-card__meta']}>Vendas: {visit.sold} / Sobras: {visit.returned}</p> 
                                <p className={styles['client-card__meta']}>VALOR RECEBIDO:R$ {visit.valueTotalPaidClient} </p>
                                <p className={styles['client-card__meta']}>Comissão Estabelecimento: R$ {visit.commissionClient}</p>
                            </div>
                        :  <section className={styles.counter} aria-label="Quantidade de vendidas e sobras">
                                <header className={styles.counter__header}>
                                    <p className={styles.counter__label}>Vendidas</p>
                                    <p className={styles.counter__label}>Sobras</p>
                                </header>

                                <div className={styles.counter__values}>
                                    <p className={styles.counter__value}>{certificatesSold}</p>
                                    <p className={styles.counter__value}>{certificatesReturned}</p>
                                </div>

                                <div className={styles.counter__actions}>
                                    <button className={styles.counter__button} type="button" onClick={() => setCertificatesSold((prev) => prev + 1)}>
                                    +1
                                    </button>
                                    <button className={styles.counter__button} type="button" onClick={() => setCertificatesSold((prev) => prev + 10)}>
                                    +10
                                    </button>
                                    <button className={styles['counter__button--muted']} type="button"  onClick={() => setCertificatesSold((prev) => prev > 0 ? prev -1 : 0)}>
                                    - 1
                                    </button>
                                </div>
                            </section>
                        }
            </article>
    )
}