import { title } from "@/components/primitives";
import {Image} from "@nextui-org/react";
import Logo from "@/public/logo.png";

export default function GalleryPage() {
	return (
		<>
			<Image width={300} isBlurred src={Logo.src} alt={'Logo'}/>
			<div className="pt-8">
				<div>Gabi Wallrafen</div>
				<div>Quettigstr. 21</div>
				<div>76530 Baden-Baden</div>
				<div>Email: <a className="text-[#DB679A]" href="mailto:gabrielewallrafen@gmail.com">gabrielewallrafen@gmail.com</a></div>
				{/*#DB679A*/}
				<div className="text-[#DB679A]"><span className="text-black">Telefon:</span> 0170 2059985</div>
			</div>
		</>
	);
}
