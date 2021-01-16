import { useStaticQuery, graphql } from 'gatsby';

const useSiteMeta = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
            }
            description
            siteUrl
            lang
            postTitle
            navLinks {
              name
              link
            }
            adsense {
              adClient
              adSlot
            }
          }
        }
      }
    `
  );
  return site;
};

export default useSiteMeta;
