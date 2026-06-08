import { Col, Row, Typography } from 'antd';
import { Lock } from 'iconoir-react';
import { GrannyChartMock } from '../components/GrannyChartMock';
import { OpenStudioButton } from '../components/OpenStudioButton';
import { colors, radii, shadows } from '../theme/tokens';

const { Title, Paragraph } = Typography;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="tw-section">
      <div className="tw-container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={13}>
            <p
              style={{
                margin: '0 0 14px',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontSize: 13,
                fontWeight: 600,
                color: colors.primaryActive,
              }}
            >
              A studio for fiber artists
            </p>

            <Title
              id="hero-title"
              level={1}
              style={{
                margin: 0,
                fontSize: 'clamp(34px, 6vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Design your stitches the way you make them
            </Title>

            <Paragraph
              style={{
                margin: '20px 0 0',
                fontSize: 'clamp(16px, 1.9vw, 19px)',
                color: colors.textSecondary,
                maxWidth: 540,
              }}
            >
              Threadwick Studio lets you chart crochet granny squares stitch by stitch — and keep your
              patterns, yarns, links and notes together in one tidy place.
            </Paragraph>

            <div
              style={{
                marginTop: 28,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <OpenStudioButton size="large" />
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  color: colors.textTertiary,
                  fontSize: 14,
                }}
              >
                <Lock aria-hidden width="1.05em" height="1.05em" />
                Free in your browser — no account needed
              </span>
            </div>
          </Col>

          <Col xs={24} md={11}>
            <div
              style={{
                position: 'relative',
                background: colors.bgContainer,
                border: `1px solid ${colors.border}`,
                borderRadius: radii.xl,
                boxShadow: shadows.lifted,
                padding: 'clamp(20px, 4vw, 36px)',
                maxWidth: 460,
                marginInline: 'auto',
              }}
            >
              <GrannyChartMock />
              <p
                style={{
                  margin: '14px 0 0',
                  textAlign: 'center',
                  fontSize: 13,
                  color: colors.textTertiary,
                }}
              >
                A granny square, charted in Threadwick
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
