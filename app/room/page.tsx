import {Image} from "@nextui-org/react";
import Room1Image from "../../public/room_1.jpeg"
import Room2Image from "../../public/gallery6_resized.jpg"

export default function AboutPage() {
	return (
		<div>
			<p className="mb-3">Teilnehmer begrenzt auf 4-6 Personen pro Kurs.</p>
			<p className="mb-3">Bitte sei zu jeder Yoga Stunde pünktlich (5 bis 10 Min vorher), so steht der Entspannung nichts im Weg.
				Während der Anfangsentspannung besteht leider kein Einlass, du kannst daraufhin zum Beginn der eigentlichen Stunde teilnehmen.</p>
			<p className="mb-3">Esse vor der Yogastunde nur etwas leichtes. Matten, Decken, Yoga Kissen, stehen Dir gerne zu Verfügung.
				Parken kannst du direkt vor dem Yoga Studio (3 Plätze auf dem Hof, 2-3 Plätze vor der Einfahrt).</p>

			<div className="md:columns-2 ml-1 mr-1">
				<Image isBlurred className="mb-3" isZoomed src={Room1Image.src} alt={'test'}/>
				<Image isBlurred isZoomed src={Room2Image.src} alt={'test'}/>
			</div>
		</div>
	);
}
