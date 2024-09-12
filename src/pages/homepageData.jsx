import { useState, useEffect } from 'react';

// Custom Hook to fetch GraphQL data
const useGraphQLFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
	const homepage = `
		query HomePage {
			header {
				header {
				headerStikyLogo {
					node {
					sourceUrl
					altText
					}
				}
				headerLogo {
					node {
					sourceUrl
					altText
					}
				}
				}
			}
			menuItems(where: {location: PRIMARY, parentId: "0"}) {
				nodes {
				uri
				label
				childItems {
					nodes {
					label
					uri
					cssClasses
					}
				}
				}
			}
			page(id: "/", idType: URI) {
				template {
				... on Template_Home {
					templateName
					homePageOptions {
					bannerImage {
						node {
						sourceUrl
						title
						}
					}
					mobileBannerImage {
						node {
						title
						sourceUrl
						}
					}
					bannerTitle
					bannerShortDescription
					bannerButton {
						title
						target
						url
					}
					asShortTitle
					asLeftTitle
					asDescription
					asLeftButton {
						target
						title
						url
					}
					asCenterImage {
						node {
						title
						sourceUrl
						}
					}
					asRightSideContent {
						asCounterSize
						enterShortText
						smallImage {
						node {
							sourceUrl
							uri
							title
						}
						}
					}
					logoLeftTitle
					lgSectionLogos {
						logoImage {
						node {
							title
							sourceUrl
						}
						}
					}
					logoRightTitle
					osShortTitle
					osTitle
					tabs {
						tabTitle
						tShortDescription
						tButtonName {
						url
						title
						target
						}
						tImage {
						node {
							title
							sourceUrl
						}
						}
						tLeftContent {
						lTitle
						lShortDescription
						lButtonName {
							title
							url
							target
						}
						}
					}
					}
				}
				}
			}
			}`


    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/sunsure/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: homepage }),
        });

        const result = await response.json();
		// console.log(result);
		
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useGraphQLFetch;
