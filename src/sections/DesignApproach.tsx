import { Col, Row } from 'antd';
import { Check } from 'iconoir-react';
import { SectionHeading } from '../components/SectionHeading';
import { StitchLegend } from '../components/StitchLegend';
import { colors } from '../theme/tokens';

const points = [
  'Place stitches in the order you’d crochet them — the chart grows as you go.',
  'No fiddly counting or symmetry math; Threadwick works out the spacing for you.',
  'Charts use the standard crochet symbols, so they’re easy for anyone to read.',
];

export function DesignApproach() {
  return (
    <section
      aria-labelledby="approach-title"
      className="tw-section"
      style={{ background: colors.bgContainer, borderBlock: `1px solid ${colors.borderSecondary}` }}
    >
      <div className="tw-container">
        <Row gutter={[48, 40]} align="top">
          <Col xs={24} md={11}>
            <SectionHeading
              id="approach-title"
              eyebrow="Charting, made natural"
              title="Design the way you make it"
              lead="Threadwick follows how you actually crochet. You build a chart stitch by stitch, and it keeps everything lined up — no graph-paper guesswork."
            />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
              {points.map((p) => (
                <li key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span
                    aria-hidden
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      flex: '0 0 auto',
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      background: colors.primary,
                      color: '#fff',
                      marginTop: 1,
                    }}
                  >
                    <Check width="1em" height="1em" />
                  </span>
                  <span style={{ color: colors.textSecondary, fontSize: 16 }}>{p}</span>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={24} md={13}>
            <h3 style={{ margin: '0 0 14px', fontSize: 16, color: colors.text }}>
              The symbols you’ll see
            </h3>
            <StitchLegend />
          </Col>
        </Row>
      </div>
    </section>
  );
}
