import { describe, it, expect } from 'vitest';

import { makeWhatsAppLink } from '../src/utils';

describe('whatsapp link creation utilities', () => {
  it('creates links on demand', async () => {
    const message = 'Ñuñoa is a very good looking place in Buenos Aires!';
    const have = makeWhatsAppLink('+584140000000', message);
    const want = 'https://wa.me/584140000000?text=%C3%91u%C3%B1oa+is+a+very+good+looking+place+in+Buenos+Aires%21';

    expect(have).equals(want);
  });
});
