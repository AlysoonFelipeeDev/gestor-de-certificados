interface Establishment {
    id: string,
    name: string,
    responsible: string,
    totalCertificates: number
}

interface SalesCertificates {
    id: string,
    establishmentId: string,
    soldCertificates: number,
    returnedCertificates: number
}

type establishmentVisit = Pick<Establishment, 'totalCertificates' | 'name' > & {
    id: string,
    sold: number,
    returned: number,
    commissionClient: number,
    valueTotalPaidClient: number
    statusCard: 'open'| 'closed'
}
