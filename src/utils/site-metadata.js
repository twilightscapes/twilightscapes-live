import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        }
      }
    }
  `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;