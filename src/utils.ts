const URL_BASE: string = 'https://wa.me';

export function makeWhatsAppLink(phone: string, message: string): string {
    // TODO: Sanitize numbers using  E164 convention
    const sanitized = (phone || "").replace("+", "");
    const url = new URL(URL_BASE);

    url.pathname = sanitized;
    url.searchParams.append('text', message);

    return url.toString();
}
