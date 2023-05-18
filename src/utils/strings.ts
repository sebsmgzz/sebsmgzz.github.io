
export const formatPhoneNumber = function(phoneNumber: string) {
    if(phoneNumber.length == 12) {
        // +XX (XXX) XXX XXXX
        const countryCode = phoneNumber.slice(0, 2);
        const provinceCode = phoneNumber.slice(2, 5);
        const areaCode = phoneNumber.slice(5, 8);
        const rest = phoneNumber.slice(8, 12);
        return `+${countryCode} (${provinceCode}) ${areaCode} ${rest}`;
    } else if (phoneNumber.length == 10) {
        // (XXX) XXX XXXX
        const provinceCode = phoneNumber.slice(0, 3);
        const areaCode = phoneNumber.slice(3, 6);
        const rest = phoneNumber.slice(6, 10);
        return `(${provinceCode}) ${areaCode} ${rest}`;
    } else if (phoneNumber.length === 8) {
        // XXXX-XXXX
        const areaCode = phoneNumber.slice(0, 4);
        const rest = phoneNumber.slice(4, 8);
        return `${areaCode}-${rest}`;
    } else if (phoneNumber.length === 7) {
        // XXX XXXX
        const areaCode = phoneNumber.slice(0, 3);
        const rest = phoneNumber.slice(3, 7);
        return `${areaCode} ${rest}`;
    } else {
        throw Error("Unable to determine phone number format");
    }
}

