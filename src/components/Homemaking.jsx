import Image from "next/image";
import Textimage from "@/images/inox-air-logo.png"
import { useEffect, useState } from "react";

const Homemaking = () => {
	const [homeMaking, setHomeMaking] = useState(null)
	useEffect(() => {
		const fachingdataHomeMaking = async () => {
			const res = await fetch('http://localhost/sunsure/graphql?query=query%20MakingPower%20{%20page(id:%20%22/%22,%20idType:%20URI)%20{%20template%20{%20...%20on%20Template_Home%20{%20templateName%20homePageOptions%20{%20logoLeftTitle%20lgSectionLogos%20{%20logoImage%20{%20node%20{%20title%20sourceUrl%20}%20}%20}%20logoRightTitle%20}%20}%20}%20}%20}');
			const data = await res.json();
			setHomeMaking(data?.data?.page?.template.homePageOptions)
		}
		fachingdataHomeMaking();
	}, [])
	if(!homeMaking){
		return ''
	}
	
	return(
		
		<div className="home_making_power_inner">
			<h2>{homeMaking.logoLeftTitle}
				{homeMaking?.lgSectionLogos?.length > 0  && 
				<span>
					{homeMaking.lgSectionLogos.map((item, index) => (
						<div className="logo_box_wrp active" key={index}>
							<Image src={item?.logoImage?.node?.sourceUrl} alt={item.logoImage.node.title} width="261" height="46" />
						</div>
					))}
				</span>
				}
				{homeMaking.logoRightTitle}
			</h2>
		</div>
	);
}

export default Homemaking;