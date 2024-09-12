import Link from "next/link";
import Image from "next/image";
import useGraphQLFetch from '@/pages/homepageData'
import Loadercontent from "@/components/layout/Loadercontent";

const Abouthome = () => {

	const data = useGraphQLFetch();

  	if (!data) return <Loadercontent />;
	
	return (
		<div className="home_about_sec">
			<div className="container">
				<div className="home_about_inner">
					<div className="home_about_left">
						<div className="section_title">
							{data.page.template.homePageOptions.asShortTitle &&
								<div className="sub_title">
									<h6>{data.page.template.homePageOptions.asShortTitle}</h6>
								</div>
							}
							<h2>{data.page.template.homePageOptions.asLeftTitle}</h2>
							<p dangerouslySetInnerHTML={{__html: data.page.template.homePageOptions.asDescription}} />
							{data.page.template.homePageOptions.asLeftButton && <div className="w3n_link_box">
								<Link href={data.page.template.homePageOptions.asLeftButton.url} className="w3n_link" target={data.page.template.homePageOptions.asLeftButton.target}>{data.page.template.homePageOptions.asLeftButton.title} </Link>
							</div>}
							
						</div>
					</div>
					<div className="home_about_center">
						<Image src={data.page.template.homePageOptions.asCenterImage.node.sourceUrl} alt={data.page.template.homePageOptions.asCenterImage.node.title} width='568' height="521"  priority={false}/>
					</div>
					<div className="home_about_right">
						<div className="about_count_wrp counter_row">
							{data.page.template.homePageOptions.asRightSideContent.map((item , index) => <div key={index} className="about_count_box counter_box">
								<div className="about_count_top">
									<div className="about_count_icon">
										<Image src={item.smallImage.node.sourceUrl} alt={item.smallImage.node.title} width="45" height="40" priority={false} />
									</div>
									<div className="about_count_number count_number">
										<span>{item.asCounterSize}</span>
									</div>
								</div>
								<p>{item.enterShortText}</p>
							</div>)}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Abouthome;