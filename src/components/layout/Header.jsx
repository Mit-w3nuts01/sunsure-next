import Link from "next/link";
import Image from "next/image";
// import Iinkdinicon from "@/images/linkdin-icon.svg";
// import Instagramicon from "@/images/instagram-icon.svg";
// import Twitericon from "@/images/twiter-icon.svg";
// import Facebookicon from "@/images/facebook-icon.svg";
import {HeaderData} from '@/pages/api/menu'

	

const Header = ({menuData}) => {
	
	// console.log(menuData.header.header.headerLogo.node.sourceUrl);
	// return ''
	return(
		<header id="header">
			<div className="container">
				<div className="header_inner flxrow">
					<div className="logo flxrow">
						<Link href="#" className="flxrow">
							<Image src={menuData.header.header.headerLogo.node.sourceUrl} alt={menuData.header.header.headerLogo.node.altText} className="defult_logo logo-images" width="180" height='40' />
							<Image src={menuData.header.header.headerStikyLogo.node.sourceUrl} alt={menuData.header.header.headerStikyLogo.node.altText} className="stiky_logo logo-images" width="180" height='40'/>
						</Link>
					</div>
					<nav className="navigation_main flxrow">
                        <ul className="main-menu flxrow">
							{menuData.menuItems.nodes.map((item , index) => (
								<li key={index} className={item?.childItems?.nodes?.length > 0 && 'menu-item-has-children'}>
									<Link href={item.uri}>{item.label}</Link>
									{item?.childItems?.nodes?.length > 0 &&
										<ul key={index} className={item?.childItems?.nodes?.length > 0 ? 'sub-menu' : ' sub-menu menu-item-has-children'}>
											{item?.childItems.nodes.map((itemchild , indexchild) =>(
												
													<li key={indexchild}>
														<Link href={itemchild.uri}>{itemchild.label}</Link>
													</li>
												
											))}
										</ul>
									}
								</li>
							))}
                        </ul>
						<div className="menu_btn">
							<Link href={HeaderData.menuButtonlink}>{HeaderData.menuButtontext}</Link>
						</div>
                    </nav>
				</div>
				<Link href="#" className="menu-btn">
					<span></span>
				</Link>
			</div>
		</header>
	)
}

export default Header;