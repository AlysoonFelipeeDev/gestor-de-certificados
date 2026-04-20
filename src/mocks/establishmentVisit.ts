import { EstablishmentVisit } from "@/types";

export const establishmentVisits: EstablishmentVisit[] = [
    {  
        id: '1',
        name: 'Banca do Zé', 
        totalCertificates: 60, 
        sold: 50, 
        returned: 10, 
        commissionClient: 50, 
        valueTotalPaidClient: 450,
        statusCard: 'open',
    },
    {
        id: '2',
        name: 'Bar Anita', 
        totalCertificates: 20, 
        sold: 10, 
        returned: 10, 
        commissionClient: 10, 
        valueTotalPaidClient: 90,
        statusCard: 'closed',
    },
    {
        id: '3',
        name: 'Mercado Guarana', 
        totalCertificates: 30, 
        sold: 7, 
        returned: 23, 
        commissionClient: 7, 
        valueTotalPaidClient: 63,
        statusCard: 'closed',
    }
]




