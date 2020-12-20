import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ({ lang, meta }) => {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title='Gatsby Silly Website Challenge by Rinat Rezyapov'
      meta={[
        {
          name: `description`,
          content: 'Gatsby Silly Website Challenge by Rinat Rezyapov',
        },
        {
          property: `og:description`,
          content: 'Gatsby Silly Website Challenge by Rinat Rezyapov',
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
