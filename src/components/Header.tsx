import { colors } from '../theme/tokens';
import { OpenStudioButton } from './OpenStudioButton';
import { Wordmark } from './Wordmark';

/** Sticky, minimal header: wordmark (with tagline) + the single CTA. */
export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(246, 244, 239, 0.82)',
        backdropFilter: 'saturate(180%) blur(10px)',
        WebkitBackdropFilter: 'saturate(180%) blur(10px)',
        borderBottom: `1px solid ${colors.borderSecondary}`,
      }}
    >
      <div
        className="tw-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          minHeight: 64,
        }}
      >
        <Wordmark showTagline />
        <OpenStudioButton />
      </div>
    </header>
  );
}
