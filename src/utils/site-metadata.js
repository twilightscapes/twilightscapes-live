import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
  graphql`
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
  `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;