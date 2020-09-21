"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CertificatesTable;
(function (CertificatesTable) {
    function Select(index) {
        return entries[index];
    }
    CertificatesTable.Select = Select;
    function Count() {
        return entries.length;
    }
    CertificatesTable.Count = Count;
    var entries = [
        {
            name: "C# Programming for Unity Game Development Specialization",
            date: new Date(2020, 8),
            path: "documents/unity-specialization-credential.pdf",
            image_id: 0,
            issuers_id: [0, 1]
        },
        {
            name: "Mechanic Electrics Bachelor Degree",
            date: new Date(2020, 6),
            path: "https://certificados.tec.mx/certificate/69ccbba2f58e5df9b67df73f2f6d57a9",
            image_id: 1,
            issuers_id: [2]
        },
        {
            name: "IT Fundamentals for Cybersecurity Specialization",
            date: new Date(2020, 6),
            path: "documents/cybersecurity-specialization-credential.pdf",
            image_id: 2,
            issuers_id: [3, 1]
        },
        {
            name: "Python for Everbody Specialization",
            date: new Date(2020, 5),
            path: "documents/python-specialization-credential.pdf",
            image_id: 3,
            issuers_id: [4, 1]
        },
        {
            name: "PHP Course",
            date: new Date(2020, 3),
            path: "documents/php-credential.pdf",
            image_id: 4,
            issuers_id: [5]
        },
        {
            name: "Web Design Course",
            date: new Date(2020, 3),
            path: "documents/web-design-credential.pdf",
            image_id: 4,
            issuers_id: [5]
        }
    ];
})(CertificatesTable || (CertificatesTable = {}));
exports.default = CertificatesTable;
