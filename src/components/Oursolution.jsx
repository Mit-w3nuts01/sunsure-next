import Link from "next/link";
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";

const Oursolution = () => {
	const [ourSolutionData , setOurSolutionData] = useState(null)
	useEffect(() => {
		const fatchDataSolution = async () => {
			const res = await fetch('http://localhost/sunsure/graphql?query=query%20OurSolution%20{%20page(idType:%20URI,%20id:%20%22/%22)%20{%20template%20{%20...%20on%20Template_Home%20{%20templateName%20homePageOptions%20{%20osShortTitle%20osTitle%20tabs%20{%20tabTitle%20tShortDescription%20tButtonName%20{%20url%20title%20target%20}%20tImage%20{%20node%20{%20title%20sourceUrl%20}%20}%20tLeftContent%20{%20lTitle%20lShortDescription%20lButtonName%20{%20title%20url%20target%20}%20}%20}%20}%20}%20}%20}%20}')
			const data = await res.json();
			setOurSolutionData(data?.data?.page?.template.homePageOptions)
		}
		fatchDataSolution()
	}, [])
	if(!ourSolutionData){
		return '';
	}
	console.log(ourSolutionData);

	
	return (
		<div className="solution_sec">
			<div className="container">
				<div className="solution_inner">
					<div className="section_title center">
						<div className="sub_title"><h6>{ourSolutionData.osShortTitle}</h6></div>
						<h2 dangerouslySetInnerHTML={{__html: ourSolutionData.osTitle}} />
					</div>
					<div className="solution_wrap">
						<Tabs defaultActiveKey={0} id="uncontrolled-tab-example1">
							{ourSolutionData.tabs.map((datas , index) => (
								<Tab eventKey={index} key={index} title={datas.tabTitle}>
									<div className="solution_wrap_box">
										<div className="solution_wrap_box_top">
											<div className="solution_wrap_top_left">
												<h4>{datas.tabTitle}</h4>
											</div>
											<div className="solution_wrap_top_right">
												<p>{datas.tShortDescription}</p>
												<div className="w3n_link_box">
													<Link href={datas.tButtonName.url} className="w3n_link" target={datas.tButtonName.target} >{datas.tButtonName.title}</Link>
												</div>
											</div>
										</div>
										<div className="solution_wrap_box_bottom">
											<div className="solution_wrap_bottom_left">
												<Accordion defaultActiveKey={0}>
													{datas.tLeftContent.map((accrData , accrIndex) => (
														<Accordion.Item eventKey={accrIndex} key={accrIndex}>
															<Accordion.Header>{accrData.lTitle}</Accordion.Header>
															<Accordion.Body>
																<p>{accrData.lShortDescription}</p>
																<div className="w3n_link_box">
																	<Link href={accrData.lButtonName.url} target={accrData.lButtonName.target} className="w3n_link">{accrData.lButtonName.title}</Link>
																</div>
															</Accordion.Body>
														</Accordion.Item>
													))}
												</Accordion>
												
											</div>
											<div className="solution_wrap_bottom_right">
												<div className="image_box">
													<Image src={datas.tImage.node.sourceUrl} alt={datas.tImage.node.title} height="346" width="447" />
												</div>
											</div>
										</div>
									</div>
							</Tab>
							))}
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Oursolution;