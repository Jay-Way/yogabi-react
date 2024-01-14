import {Image} from "@nextui-org/react";
import AboutImage from "@/public/misc_items.jpg";
export default function AboutPage() {
	return (
		<>
			<div>
				<Image className="mb-8" isBlurred width={"full"} src={AboutImage.src} alt={'test'}/>
				<p className="mb-3">Schön dass du da bist!</p>
				<p className="mb-3">
					Mein Name ist Gabi Wallrafen, und ich unterrichte Yoga mit viel Freude und positiver Energie.
					Erfahre die Ruhe und die Kraft im Yoga. Yoga ist das zur Ruhe Kommen der Gedanken im Geiste.
					Yoga heißt Einheit und Harmonie und ist ein Weg der Erfahrung.
					In meinen Stunden erfährst du die Verbindung von Spannung, Entspannung und tiefer Atmung.
					Körper und Geist werden gleichermaßen angesprochen und kommen zur Ruhe.</p>

				<p className="mb-3">
					Atemtechniken (PRANYAMA) und Körperübungen (Asanas) erlernen, welche deinen Körper stärken,
					tiefe Entspannung erfahren. All dies biete ich Dir in meinen Stunden.
					Yoga lässt sich auf die verschiedenen körperlichen Bedürfnisse jedes Teilnehmers ein.
					Ich konzentriere mich weniger auf schwierige Asanas, sondern mehr auf die korrekte Ausführung mit Hilfestellung. Daher sind meine
					Kurse für
					junge und jung gebliebene geeignet.
					Ich unterrichte <span className="text-[#DAA520FF]">HATHA YOGA</span>, <span className="text-[#DAA520FF]">HA</span> die <span className="text-[#DAA520FF]"
				>SONNE</span>, <span className="text-[#DAA520FF]">THA</span> der <span className="text-[#DAA520FF]">MOND</span>. Diese
					Verbindung wieder spüren und genießen.
				</p>
				<p className="mb-3">Ich freue mich auf dich.</p>
				<h1 className="pt-5 text-8xl display-1 text-[#DAA520FF]">ॐ</h1>
			</div>
		</>
	);
}
