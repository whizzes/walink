export class WhatsAppLinkMaker {
    private phoneNumber: string;

    constructor(phoneNumber: string) {

        console.log(phoneNumber.startsWith('+') && !phoneNumber.split(' ').length)
        if (phoneNumber.startsWith('+') && !phoneNumber.split(' ').length) {
            this.phoneNumber = phoneNumber;
            return;
        }
        throw new TypeError('The phone number must begin with "+" and must not contain spaces');
    }

    public make(message: string): string {
        throw new Error('Not Implemented');
    }
}