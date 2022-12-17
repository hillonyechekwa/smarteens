import React from 'react';
import Layout from './src/components/layout'
import './src/global.css'

const wrapPageElement = ({ element, props }) => {
    <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }