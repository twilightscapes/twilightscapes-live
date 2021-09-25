import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            titleDefault
            siteUrl
            description
            image
            twitterUsername
            iconimage
            companyname
            comments
            showfooter
          }
        }
      }
    `
  )
  return site.siteMetadata
}