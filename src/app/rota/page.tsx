import { ClientCard } from "@/components/card";
import styles from "./page.module.scss";
import { establishmentVisits } from "@/mocks/establishmentVisit";

export default function Route() {
    return (
        <section className={styles.route} aria-label="Conteúdo da rota">
            <article className={styles.selector} aria-label="Selecionar rota">
                <p className={styles.selector__text}>Rota: Centro</p>
                <span className={styles.selector__icon}></span>
            </article>
            {establishmentVisits.map(visit => (
                <ClientCard key={visit.id} visit={visit} updateSales={(value) => {}} onClose={(id) => {}} openCard={(id) => {}}/>
            ))}
        </section>
    )
}