import { makeWhatsAppLink } from './utils';

export class WhatsAppLinkMaker {
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    if (phoneNumber.startsWith('+') && phoneNumber.split(' ').length === 1) {
      this.phoneNumber = phoneNumber;
      return;
    }

    throw new TypeError(
      'The phone number must begin with "+" and must not contain spaces',
    );
  }

  public make(message: string): string {
    return makeWhatsAppLink(this.phoneNumber, message);
  }
}
