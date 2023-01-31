import { describe, it, expect } from 'vitest';

import { WhatsAppLinkMaker } from '../src/WhatsAppLinkMaker';
import { makeWhatsAppLink } from '../src/utils';

describe('whatsapp link creation utilities', () => {
  it('creates links on demand', async () => {
    const message = 'Ñuñoa is a very good looking place in Buenos Aires!';
    const have = makeWhatsAppLink('+584140000000', message);
    const want = 'https://wa.me/584140000000?text=%C3%91u%C3%B1oa+is+a+very+good+looking+place+in+Buenos+Aires%21';

    expect(have).equals(want);
  });
});

describe('whatsapp link maker', () => {
  it('uses the provided phone number', async () => {
    const message = 'Ñuñoa is a very good looking place in Buenos Aires!';
    const waLinkMaker = new WhatsAppLinkMaker('+584140000000');
    const have = waLinkMaker.make(message);
    const want = 'https://wa.me/584140000000?text=%C3%91u%C3%B1oa+is+a+very+good+looking+place+in+Buenos+Aires%21';

    expect(have).equals(want);
  });

  it('throws if not E.164 compliant value is provided to constructor', async () => {
    expect(() => {
      new WhatsAppLinkMaker('thisisnotvalidphonenumber');
    }).toThrow();
  });
});
