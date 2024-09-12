import Image from "next/image";
import Link from "next/link";

import shapBanner from '@/images/banner-paten.svg'
import useGraphQLFetch from '@/pages/homepageData'
import Loadercontent from "@/components/layout/Loadercontent";

const Homebanner = () => {
	
	const data = useGraphQLFetch();

  	if (!data) return <Loadercontent />;
	// let dataheading = '{Homebannerdata.HomeBannerheading}';
	return (
		
		<div className="banner_wapper home_banner_wapper">
			<div className="banner_image">
				<Image src={data.page.template.homePageOptions.bannerImage.node.sourceUrl} className="d-md-block d-none" alt={data.page.template.homePageOptions.bannerImage.node.title} width="1920" height="1080" priority={true} /> 
				<Image src={data.page.template.homePageOptions.mobileBannerImage.node.sourceUrl} className="d-md-none" alt="{data.page.template.homePageOptions.mobileBannerImage.node.title}"  width="387" height="863" priority={true}/>
			</div>
			<div className="banner_image_patten">
				<Image src={shapBanner} alt="" priority={false} />
			</div>
			<div className="home_banner_inner">
				<div className="container">
					<div className="home_banner_txt">
						{!data.page.template.homePageOptions.bannerTitle ? null : <h1 dangerouslySetInnerHTML={{__html: data.page.template.homePageOptions.bannerTitle}} /> }
						
						<p>{data.page.template.homePageOptions.bannerShortDescription}</p>
						{!data.page.template.homePageOptions.bannerButton.title ? null : <div className="w3n_buttom_box">
							<Link href={data.page.template.homePageOptions.bannerButton.url} className="w3n_buttom">{data.page.template.homePageOptions.bannerButton.title}</Link>
						</div>}
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homebanner;