import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

export default function Help() {
  return (
    <Layout>
      <div style={{padding:"5rem"}}>
        <h3>
          Need help?
        </h3>
        <p>Sub title</p>

        <div className={clsx('row row--1')}>
          <div className={clsx('col col--4')}>
            Test
          </div>
          <div className={clsx('col col--4')}>
            Test
          </div>
          <div className={clsx('col col--4')}>
            Test
          </div>
        </div>
      </div>
    </Layout>
  );
}