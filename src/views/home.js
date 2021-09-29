import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project12</title>
        <meta property="og:title" content="New Project12" />
      </Helmet>
      <span>Test Github Pages</span>
    </div>
  )
}

export default Home
