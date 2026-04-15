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

