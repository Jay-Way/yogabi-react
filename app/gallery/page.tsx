import {Image} from "@nextui-org/react";
import GalleryImage1 from "@/public/gallery1.jpg";
import GalleryImage2 from "@/public/gallery2.jpg";
import GalleryImage3 from "@/public/gallery4_resized.jpg";
import GalleryImage4 from "@/public/gallery5_resized.jpg";
import GalleryImage5 from "@/public/gallery6_resized.jpg";
import GalleryImage6 from "@/public/gallery7_resized.jpg";
import GalleryImage7 from "@/public/gallery8_resized.jpg";

export default function GalleryPage() {
	return (
		<>
			<Image isBlurred isZoomed src={GalleryImage1.src} alt={'Image of a Buddha statue'}/>
			<Image isBlurred isZoomed src={GalleryImage2.src} alt={'Image of the store front'}/>
			<Image isBlurred isZoomed src={GalleryImage5.src} alt={'Image of miscellaneous items'}/>
			<Image isBlurred isZoomed src={GalleryImage6.src} alt={'Image of miscellaneous items'}/>
			<Image isBlurred isZoomed src={GalleryImage7.src} alt={'Image of a Buddha statue'}/>
			<Image isBlurred isZoomed src={GalleryImage3.src} alt={'Image of text on a wall'}/>
			<Image isBlurred isZoomed src={GalleryImage4.src} alt={'Image of a chakra symbol'}/>
		</>
	);
}
