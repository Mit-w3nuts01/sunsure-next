import Link from "next/link";
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import useGraphQLFetch from '@/pages/homepageData'
import Loadercontent from "@/components/layout/Loadercontent";

const Oursolution = () => {
	const data = useGraphQLFetch();

  	if (!data) return <Loadercontent />;
	
	
	return (
		<div className="solution_sec">
			<div className="container">
				<div className="solution_inner">
					<div className="solution_wrap">
						<Tabs defaultActiveKey={0} id="uncontrolled-tab-example1">
							{data.page.template.homePageOptions.tabs.map((datas , index) => (
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
													<Image src={datas.tImage.node.sourceUrl} alt={datas.tImage.node.title} height="346" width="447" priority={false} />
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