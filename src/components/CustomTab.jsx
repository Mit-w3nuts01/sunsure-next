import Link from "next/link";
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import useGraphQLFetch from '@/pages/homepageData'
import Loadercontent from "@/components/layout/Loadercontent";
import { customTab } from "@/pages/api/menu";
import { useState } from "react";

const CustomTab = () => {
	const [activeTab, setActiveTab] = useState(0)
	const [activeaccordion, setActiveaccordion] = useState(0)
	// const [activeTab, setActiveTab] = useState(customTab.tabdata[0]?.id)
	// const datas = useGraphQLFetch();

  	// if (!datas) return <Loadercontent />;
	// console.log(datas);
	// console.log(customTab.tabdata);
	
function tabHadler(getTabId) {
	setActiveTab(getTabId);
}
	
	return (
		<div className="solution_sec">
			<div className="container">
				<div className="tab_menu_custom">
					{customTab.tabdata.map((tabdatalink , indextabdatalink) => ( 
						<Link key={indextabdatalink} className={`${activeTab === indextabdatalink ? 'active' : ''}`} href="#" onClick={(e) =>  { e.preventDefault(); tabHadler(indextabdatalink)}}>{tabdatalink.tabTitle}</Link>
					))}
				</div>
				{customTab.tabdata.map((tabdatas , index) => ( 
					<div key={index} className={`data_tabs ${activeTab === index ? 'active' : ''}`}  >
						<p>{tabdatas.tabDetail}</p>
						<div className="accordion_wrap">
							{tabdatas.accordiondata.map((accordiondatas, accordionindex) => (
								<div className="accordion_box" key={accordionindex}>
									<Link className="accr_button" href="#">{accordiondatas.accordiontitle}</Link>
									<div className="accordion_box_data">
										<p>{accordiondatas.accordiontext}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
				
			</div>
		</div>
	);
}
export default CustomTab;