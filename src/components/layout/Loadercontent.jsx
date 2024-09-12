import Image from "next/image";
import LoaderImage from "@/images/logo-white.svg"
const Loadercontent = () => {
	return (
		<div className="loader_main">
			<Image src={LoaderImage} alt="Loader" />
		</div>
	);
}
export default Loadercontent;