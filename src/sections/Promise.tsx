import { SectionHeading } from '../components/SectionHeading';
import { PLEDGES } from '../data/promise';
import { colors } from '../theme/tokens';

/** "Our promise" — the fairness manifesto, the spine of the whole page. */
export function OurPromise() {
  return (
    <section
      aria-labelledby="promise-title"
      className="tw-section"
      style={{ background: colors.bgContainer, borderBlock: `1px solid ${colors.borderSecondary}` }}
    >
      <div className="tw-container">
        <SectionHeading
          id="promise-title"
          eyebrow="Our promise"
          title="Fair tools for fiber artists & makers"
          lead="This isn’t a tagline — it’s how we make decisions. We’re building Threadwick to be fair to the artists who design patterns and the makers who follow them."
          align="center"
        />
        <ul
          style={{
            listStyle: 'none',
            margin: '0 auto',
            padding: 0,
            maxWidth: 1000,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 'clamp(28px, 3.4vw, 44px)',
          }}
        >
          {PLEDGES.map(({ icon: Icon, title, body }) => (
            <li key={title} style={{ textAlign: 'center' }}>
              <span
                aria-hidden
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 56,
                  height: 56,
                  margin: '0 auto 16px',
                  borderRadius: 999,
                  background: colors.primaryWash,
                  color: colors.primary,
                }}
              >
                <Icon width="1.6em" height="1.6em" />
              </span>
              <h3 className="tw-display" style={{ margin: '0 0 8px', fontSize: 18, color: colors.text }}>
                {title}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: colors.textSecondary }}>
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
