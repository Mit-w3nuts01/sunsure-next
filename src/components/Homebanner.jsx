import Image from "next/image";
import Link from "next/link";
// import Homebannerdata from '@/pages/api/menu'
import { Homebannerdata } from "@/pages/api/menu";
import { useEffect, useState } from 'react';

const Homebanner = () => {
	const [homeBanner, setHomeBanner] = useState(null);

	useEffect(() => {
	  const fetchDataHomeBanner = async () => {
		const res = await fetch('http://localhost/sunsure/graphql?query=query%20HomePageBanner%20{%20page(id:%20%22/%22,%20idType:%20URI)%20{%20template%20{%20...%20on%20Template_Home%20{%20templateName%20homePageOptions%20{%20bannerImage%20{%20node%20{%20sourceUrl%20title%20}%20}%20mobileBannerImage%20{%20node%20{%20title%20sourceUrl%20}%20}%20bannerTitle%20bannerShortDescription%20bannerButton%20{%20title%20target%20url%20}%20}%20}%20}%20}%20}');
		const data = await res.json();
		setHomeBanner(data?.data?.page?.template.homePageOptions);
	  };
  
	  fetchDataHomeBanner();
	}, []);

	if(!homeBanner){
		return ''
	}
	// let dataheading = '{Homebannerdata.HomeBannerheading}';
	return (
		
		<div className="banner_wapper home_banner_wapper">
			<div className="banner_image">
				<Image src={homeBanner.bannerImage.node.sourceUrl} className="d-md-block d-none" alt={homeBanner.bannerImage.node.title} width="1920" height="1080" /> 
				<Image src={homeBanner.mobileBannerImage.node.sourceUrl} className="d-md-none" alt="{homeBanner.mobileBannerImage.node.title}"  width="387" height="863"/>
			</div>
			<div className="banner_image_patten">
				<Image src={Homebannerdata.Bannerpatern} alt="" />
			</div>
			<div className="home_banner_inner">
				<div className="container">
					<div className="home_banner_txt">
						{!homeBanner.bannerTitle ? null : <h1 dangerouslySetInnerHTML={{__html: homeBanner.bannerTitle}} /> }
						
						<p>{homeBanner.bannerShortDescription}</p>
						{!homeBanner.bannerButton.title ? null : <div className="w3n_buttom_box">
							<Link href={homeBanner.bannerButton.url} className="w3n_buttom">{homeBanner.bannerButton.title}</Link>
						</div>}
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homebanner;