import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en-US" />
      <link rel="alternate" href={seo.url} hrefLang="en-us" />
      <link rel="alternate" href={seo.url} hrefLang="en" />
      <link rel="alternate" href={seo.url} hrefLang="x-default" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <link rel="apple-touch-icon" sizes="180x180" href="/siteimages/apple-splashapple-icon-180.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/siteimages/apple-splashapple-icon-167.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/siteimages/apple-splashapple-icon-152.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/siteimages/apple-splashapple-icon-120.png" />

<meta name="apple-mobile-web-app-capable" content="yes" />

<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2048-2732.png"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2732-2048.png"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1668-2388.png"
    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2388-1668.png"
    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1668-2224.png"
    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2224-1668.png"
    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1536-2048.png"
    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2048-1536.png"
    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1242-2688.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2688-1242.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1125-2436.png"
    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2436-1125.png"
    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-828-1792.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1792-828.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1242-2208.png"
    media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2208-1242.png"
    media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-750-1334.png"
    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1334-750.png"
    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-640-1136.png"
    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1136-640.png"
    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />


    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`
