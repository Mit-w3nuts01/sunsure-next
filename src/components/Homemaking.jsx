import Image from "next/image";
import useGraphQLFetch from '@/pages/homepageData'
import Loadercontent from "@/components/layout/Loadercontent";
const Homemaking = () => {
	const data = useGraphQLFetch();

  	if (!data) return <Loadercontent />;
	
	return(
		
		<div className="home_making_power_inner">
			<h2>{data.page.template.homePageOptions.logoLeftTitle}
				{data.page.template.homePageOptions?.lgSectionLogos?.length > 0  && 
				<span>
					{data.page.template.homePageOptions.lgSectionLogos.map((item, index) => (
						<div className="logo_box_wrp active" key={index}>
							<Image src={item?.logoImage?.node?.sourceUrl} alt={item.logoImage.node.title} width="261" height="46" priority={false} />
						</div>
					))}
				</span>
				}
				{data.page.template.homePageOptions.logoRightTitle}
			</h2>
		</div>
	);
}

export default Homemaking;