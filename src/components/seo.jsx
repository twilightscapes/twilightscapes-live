import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

export function Seo({
  title = "",
  description = "",
  pathname = "",
  image = "",
  children = null,
}) {
  const location = useLocation()
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleDefault
          siteUrl
          hrefLang
          siteDescription
          siteImage
          twitter
        }
      }
    }
  `)

  const {
    siteTitle,
    siteTitleDefault,
    siteUrl,
    siteDescription,
    siteImage,
    hrefLang,
    twitter,
  } = siteMetadata

  const seo = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : location.href,
    image: `${image || siteImage}`,
    // image = image[0] === "/" ? "https://twilightscapes.com" + image : image
  }


  return (
    <Helmet
      title={title}
      defaultTitle={siteTitleDefault}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={hrefLang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

<link rel="apple-touch-icon" sizes="180x180" href="/siteimages/apple-splashapple-icon-180.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/siteimages/apple-splashapple-icon-167.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/siteimages/apple-splashapple-icon-152.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/siteimages/apple-splashapple-icon-120.png" />



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




    
      {children}
    </Helmet>
  )
}