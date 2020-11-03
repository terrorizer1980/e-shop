import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To EUC-Shop',
  description: 'We sell the best electric unicycles',
  keywords:
    'euc, electric unicycle, buy electric unicycles, cheap electric unicycles',
}
export default Meta
