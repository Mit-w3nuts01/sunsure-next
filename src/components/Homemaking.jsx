import Image from "next/image";
import Textimage from "@/images/inox-air-logo.png"

const Homemaking = () => {
	return(
		<div className="home_making_power_sec">
			<div className="container">
				<div className="home_making_power_inner">
					<h2>Making <span><div className="logo_box_wrp active"><Image src={Textimage} alt="" /></div></span>’s power move.</h2>
				</div>
			</div>
		</div>	
	);
}

export default Homemaking;