'use client'

import { useState } from 'react';
import styles from './index.module.scss';
import { EstablishmentVisit } from "@/types"

type ClientCardProps =  {
    visit: EstablishmentVisit,
    updateSales: (value: number) => void,
    onClose: (id: string, visit: UpdateVisit) => void
    openCard: (id: string) => void
    certificateValueWeek: number
}

type UpdateVisit = Pick<EstablishmentVisit, 'sold' | 'returned' | 'commissionClient' | 'valueTotalPaidClient' | 'statusCard'>


export function ClientCard({visit, updateSales, onClose, openCard, certificateValueWeek} : ClientCardProps){
    const isOpen = visit.statusCard === 'open'
    const [ certificatesSold, setCertificatesSold ] = useState(0)
    const certificatesReturned = visit.totalCertificates - certificatesSold

    return (
            <article 
                className={`${styles['client-card']} ${styles[isOpen ? 'client-card--open' : 'client-card--closed' ]}`}
                onClick={() => !isOpen && openCard(visit.id)}
            >
                <header className={styles['client-card__header']}>
                    <p className={styles['client-card__name']}>{visit.name}</p>
                    <p className={styles['client-card__name']}>Total cartelas: {visit.totalCertificates}</p>
                    {isOpen 
                        ? <button 
                            className={styles['client-card__add-button']} type="button" aria-label="Fechar visita" 
                            onClick={() => onClose(
                                visit.id,
                                {
                                    
                                    commissionClient: certificatesSold * certificateValueWeek * 0.1,
                                    returned: certificatesReturned,
                                    sold: certificatesSold,
                                    valueTotalPaidClient: certificatesSold * certificateValueWeek * 0.9,
                                    statusCard: 'closed',
                                    
                                }
                            )}
                                >+</button>
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
                                    <p className={styles.counter__label}>cobrar valor</p>
                                </header>

                                <div className={styles.counter__values}>
                                    <p className={styles.counter__value}>{certificatesSold}</p>
                                    <p className={styles.counter__value}>{certificatesReturned}</p>
                                    <p className={styles.counter__value}>{certificatesSold * certificateValueWeek * 0.9}</p>
                                </div>

                                <div className={styles.counter__actions}>
                                    <button className={styles.counter__button} type="button" onClick={() => setCertificatesSold((prev) => prev >= visit.totalCertificates ? visit.totalCertificates : prev + 1)}>
                                    +1
                                    </button>
                                    <button className={styles.counter__button} type="button" onClick={() => setCertificatesSold((prev) =>prev >= visit.totalCertificates ? visit.totalCertificates : prev + 10)}>
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