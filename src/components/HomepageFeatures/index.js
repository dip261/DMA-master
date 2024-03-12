import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/test.svg').default,
    description: (
      <>
        Sample Text
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('row row--2')}>
      <div className={clsx('col col--6')} style={{padding:"2rem"}}>
        <div className="text--left">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
      <div className={clsx('col col--6')} style={{padding:"2rem"}}>
        <div className="text--left">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div style={{backgroundColor:"gray",color:"white", padding:"2rem"}}>
        <p>Get up to speed quickly by viewing one of our recorded Lineage Demystified brown bag sessions or sign up for a future event. </p>
        <div className={clsx('row row--1')}>
          <div className={clsx(' col col--4')}>
            <div>
              <h4>DMA 101</h4>
              <p>This first presentation in this series, provides an introduction into lineage - what is it and how it works.</p>
            </div>
          </div>
          <div className={clsx(' col col--4')}>
            <h4>Producer Onboarding</h4>
            <p>The producer on boarding presentation explains who needs to produce lineage and covers the technical onboarding details</p>
          </div>
          <div className={clsx(' col col--4')}>
            <div>
              <h4>Consuming DMA</h4>
              <p>The presentation on Consuming Lineage provides details on how to query and interpret the lineage graph data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div style={{padding:"2rem"}}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
