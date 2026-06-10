import { Community, Globe, HandCash, LockSlash } from 'iconoir-react';

export interface Pledge {
  icon: typeof Community;
  title: string;
  body: string;
}

/**
 * Threadwick's core promise — bold principles, deliberately without hard numbers
 * so they read as commitments of intent, not a price sheet.
 */
export const PLEDGES: Pledge[] = [
  {
    icon: Community,
    title: 'Built for fiber artists & makers',
    body: 'Made by and for the people who design patterns and the people who make from them. Every decision starts with you — not growth charts.',
  },
  {
    icon: HandCash,
    title: 'You keep what you earn',
    body: 'When you sell, you keep the large majority. Fees are small, flat and shown up front — no surprises, no creeping cuts.',
  },
  {
    icon: LockSlash,
    title: 'No lock-in, no tricks',
    body: 'Your work is yours — export it anytime in open formats and leave whenever you like. No manipulative upsells, no engagement traps, no selling your data.',
  },
  {
    icon: Globe,
    title: 'Fair pricing, wherever you are',
    body: 'Pricing that flexes with where you live and what you can spend, so the tools stay within reach — everywhere.',
  },
];
