import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../img/bruh.jpg'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
  <Helmet>
<title>Thaddeus Jordan</title>
<link rel="icon" type="image/jpg" href={favicon} sizes="16x16" />
</Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
