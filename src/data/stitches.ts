/**
 * Canonical crochet stitch symbols, shared by StitchSymbol, StitchLegend and
 * GrannyChartMock so the legend and the hero artwork never drift apart.
 *
 * Notation follows standard crochet charting:
 *   chain      -> oval
 *   slip st    -> filled dot
 *   sc         -> cross
 *   hdc        -> T (vertical bar + top cap)
 *   dc/tr/dtr  -> T with 1 / 2 / 3 diagonal slashes (slashes encode stitch height)
 */
export type StitchType = 'chain' | 'slip' | 'sc' | 'hdc' | 'dc' | 'tr' | 'dtr';

export interface StitchDef {
  type: StitchType;
  abbr: string;
  name: string;
  blurb: string;
}

export const STITCHES: StitchDef[] = [
  { type: 'chain', abbr: 'ch', name: 'Chain', blurb: 'An open oval' },
  { type: 'slip', abbr: 'sl st', name: 'Slip stitch', blurb: 'A small filled dot' },
  { type: 'sc', abbr: 'sc', name: 'Single crochet', blurb: 'A cross' },
  { type: 'hdc', abbr: 'hdc', name: 'Half double', blurb: 'A T' },
  { type: 'dc', abbr: 'dc', name: 'Double crochet', blurb: 'A T with one slash' },
  { type: 'tr', abbr: 'tr', name: 'Treble', blurb: 'A T with two slashes' },
  { type: 'dtr', abbr: 'dtr', name: 'Double treble', blurb: 'A T with three slashes' },
];

/** Number of diagonal slashes across the stem for the "post" stitches. */
export const STITCH_SLASHES: Record<StitchType, number> = {
  chain: 0,
  slip: 0,
  sc: 0,
  hdc: 0,
  dc: 1,
  tr: 2,
  dtr: 3,
};
