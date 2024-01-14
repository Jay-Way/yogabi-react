import { title } from "@/components/primitives";

export default function PricingPage() {
	return (
		<div>
			<p className="mb-3">Jede Yogastunde dauert <b>70 Minuten</b></p>

			<div className="pt-5"></div>

			<p className="mb-3">Jede Stunde enthält:</p>
			<p className="mb-1"><b>Anfangsentspannung</b> (Savasana)</p>
			<p className="mb-1"><b>Pranayama</b> (Atemübung)</p>
			<p className="mb-1"><b>Asanas</b> (Körperübungen)</p>
			<p className="mb-3"><b>Endentspannung</b> (Savasana) oder Meditation</p>

			<div className="pt-5"></div>

			<p className="mb-2">Bei schönem Wetter finden die Stunden im Garten statt.</p>
			<p className="mb-2">Kursgebühr für 10 Termine: <b>170€</b></p>
			<p className="mb-2">Privatyogastunde <b>70€</b></p>
			<p className="mb-2">Schnupperstunde <b>15€</b> (Wird beim Kauf einer 10er Karte verrechnet)</p>
		</div>
	);
}
