
export type CertificateCardProps = {
    title: string,
    src: string,
    issuers: CertificateIssuer[],
    issuedAt: Date
}

export type CertificateIssuer = {
    name: string,
    url: string
}
