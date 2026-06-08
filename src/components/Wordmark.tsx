import { colors } from '../theme/tokens';

/** The Threadwick logo mark — a terracotta tile with a simple stitch motif. */
function Mark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden focusable="false">
      <rect x={0} y={0} width={32} height={32} rx={9} fill={colors.primary} />
      <circle cx={16} cy={16} r={8.5} fill="none" stroke="#fff" strokeWidth={2} />
      <line x1={16} y1={6.5} x2={16} y2={25.5} stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <line x1={6.5} y1={16} x2={25.5} y2={16} stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

/**
 * Lowercase "threadwick" wordmark with the logo mark. Renders as a link to the
 * homepage root by default.
 */
export function Wordmark({
  size = 30,
  fontSize = 20,
  asLink = true,
  showTagline = false,
}: {
  size?: number;
  fontSize?: number;
  asLink?: boolean;
  showTagline?: boolean;
}) {
  const inner = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <Mark size={size} />
      <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <span
          className="tw-display"
          style={{ fontSize, fontWeight: 700, color: colors.text, letterSpacing: '-0.02em' }}
        >
          threadwick
        </span>
        {showTagline && (
          <span style={{ fontSize: 11.5, color: colors.textTertiary, letterSpacing: '0.02em' }}>
            for fiber artists
          </span>
        )}
      </span>
    </span>
  );

  if (!asLink) return inner;
  return (
    <a href="/" aria-label="Threadwick — home" style={{ textDecoration: 'none' }}>
      {inner}
    </a>
  );
}
