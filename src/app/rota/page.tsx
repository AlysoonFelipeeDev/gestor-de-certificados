'use client';

import { ClientCard } from "@/components/card";
import styles from "./page.module.scss";
import { establishmentVisits } from "@/mocks/establishmentVisit";
import { useState } from "react";

export default function Route() {
    const [listVisists, setListVisits] = useState(establishmentVisits)
    return (
        <section className={styles.route} aria-label="Conteúdo da rota">
            <article className={styles.selector} aria-label="Selecionar rota">
                <p className={styles.selector__text}>Rota: Centro</p>
                <span className={styles.selector__icon}></span>
            </article>
            {listVisists.map(visit => (
                <ClientCard 
                    key={visit.id} 
                    visit={visit} 
                    updateSales={(value) => {}} 
                    onClose={(id, visit) => {
                        setListVisits(prev => prev.map(v => {
                            if(v.id === id ) {
                                return {
                                    ...v,
                                    ...visit, 
                                }
                            }
                            return v
                        }))
                    }} 
                    openCard={(id) => {
                        setListVisits(prev => prev.map(v => {
                            if(v.id === id) {
                                return {
                                    ...v, 
                                    statusCard: 'open'
                                }
                            }
                            return v
                        }))
                    }}
                    certificateValueWeek={10}/>
            ))}
        </section>
    )
}