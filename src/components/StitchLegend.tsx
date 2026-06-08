import { STITCHES } from '../data/stitches';
import { colors, radii } from '../theme/tokens';
import { StitchSymbol } from './StitchSymbol';

/** A small grid pairing each crochet symbol with its name and abbreviation. */
export function StitchLegend() {
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: 12,
      }}
    >
      {STITCHES.map((s) => (
        <li
          key={s.type}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 12px',
            background: colors.bgContainer,
            border: `1px solid ${colors.border}`,
            borderRadius: radii.lg,
          }}
        >
          <span
            aria-hidden
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 40,
              height: 40,
              flex: '0 0 auto',
              background: colors.primaryWash,
              borderRadius: radii.base,
            }}
          >
            <StitchSymbol type={s.type} size={28} />
          </span>
          <span style={{ minWidth: 0 }}>
            <span style={{ display: 'block', fontWeight: 600, lineHeight: 1.2 }}>{s.name}</span>
            <span style={{ display: 'block', fontSize: 13, color: colors.textTertiary }}>
              {s.abbr} · {s.blurb}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
