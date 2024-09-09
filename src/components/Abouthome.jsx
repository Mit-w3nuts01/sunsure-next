import Link from "next/link";
import Image from "next/image";
import {Homeaboutdata} from '@/pages/api/menu'
import { useEffect, useState } from 'react';

const Abouthome = () => {
	const [homeAbout, setHomeAbout] = useState(null);

	useEffect(() => {
	  const fetchDataHomeAbout = async () => {
		const res = await fetch('http://localhost/sunsure/graphql?query=query%20HomePageAbout%20{%20page(id:%20%22/%22,%20idType:%20URI)%20{%20template%20{%20...%20on%20Template_Home%20{%20templateName%20homePageOptions%20{%20asShortTitle%20asLeftTitle%20asDescription%20asLeftButton%20{%20target%20title%20url%20}%20asCenterImage%20{%20node%20{%20title%20sourceUrl%20}%20}%20asRightSideContent%20{%20asCounterSize%20enterShortText%20smallImage%20{%20node%20{%20sourceUrl%20uri%20title%20}%20}%20}%20}%20}%20}%20}%20}');
		const data = await res.json();
		setHomeAbout(data?.data?.page?.template.homePageOptions);
	  };
  
	  fetchDataHomeAbout();
	}, []);

	if(!homeAbout){
		return ''
	}
	console.log(homeAbout);
	
	return (
		<div className="home_about_sec">
			<div className="container">
				<div className="home_about_inner">
					<div className="home_about_left">
						<div className="section_title">
							{homeAbout.asShortTitle &&
								<div className="sub_title">
									<h6>{homeAbout.asShortTitle}</h6>
								</div>
							}
							<h2>{homeAbout.asLeftTitle}</h2>
							<p>{homeAbout.asDescription}</p>
							{homeAbout.asLeftButton && <div className="w3n_link_box">
								<Link href={homeAbout.asLeftButton.url} className="w3n_link" target={homeAbout.asLeftButton.target}>{homeAbout.asLeftButton.title} </Link>
							</div>}
							
						</div>
					</div>
					<div className="home_about_center">
						<Image src={homeAbout.asCenterImage.node.sourceUrl} alt={homeAbout.asCenterImage.node.title} width='568' height="521" />
					</div>
					<div className="home_about_right">
						<div className="about_count_wrp counter_row">
							{homeAbout.asRightSideContent.map((item , index) => <div key={index} className="about_count_box counter_box">
								<div className="about_count_top">
									<div className="about_count_icon">
										<Image src={item.smallImage.node.sourceUrl} alt={item.smallImage.node.title} width="45" height="40" />
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