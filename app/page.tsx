import MobileWelcomeImage from "@/public/gallery1.jpg";
import {Image} from "@nextui-org/react";

export default function Home() {
	return (
		<>
			<div className="block md:hidden m-3">
				<div className="mb-3 flex flex-col text-center">
					<h1 className="font-semibold text-4xl">Namasté</h1>
					<p className="text-xl">
						und herzlich willkommen in meinem Yogaraum in Baden-Baden
					</p>
				</div>
				<Image src={MobileWelcomeImage.src} alt={'Image of a Buddha statue'}/>

			</div>
			<div className="hidden md:block">
				<div className="text-center">
					<div className="inset-0 flex items-center justify-center">
						<video playsInline autoPlay loop muted className="w-full h-full object-cover">
						<source src={"/yogabi_compressed.mp4"} type="video/mp4"/>
							Your browser does not support the video tag.
						</video>
					</div>
					<div className="absolute -mt-36 mb-12 inset-0 flex flex-col items-center justify-center">
						<h1 className="text-white font-semibold text-xl sm:text-8xl">Namasté</h1>
						<p className="text-white text-xl">
							und herzlich willkommen in meinem Yogaraum in Baden-Baden
						</p>
					</div>
				</div>
			</div>

			<div className="text-center">
				<div className="pt-10 sm:pt-4"></div>
				<p>Ankommen und loslassen, das ist genug. Yoga ist ein Weg der Erfahrung.</p>
				<br/>
				<div className="font-bold">
					<p>Om Saha Nāvavatu</p>
					<p>Saha Nau Bhunaktu,</p>
					<p>Saha Vīryam Karavāvahai</p>
					<p>Tejas Vinā Vadhī Tamatsu,</p>
					<p>Mā Vidvashāvahai</p>
					<p>Om Shāntih, Shāntih, Shāntih</p>
				</div>
				<br/>
				<div className="translated-div">
					<p className="italic">Om. Möge das Göttliche uns beide beschützen,</p>
					<p className="italic">Lehrer und Schüler.</p>
					<p className="italic">Möge Es uns beide die Wonne</p>
					<p className="italic">der Befreiung genießen lassen.</p>
					<p className="italic">Mögen wir beide uns anstrengen die wahre</p>
					<p className="italic">Bedeutung der Schriften zu erfassen.</p>
					<p className="italic">Möge unser Lernen ausgezeichnet sein.</p>
					<p className="italic">Mögen wir niemals miteinander streiten.</p>
					<p className="italic">Om Frieden, Frieden, Frieden.</p>
				</div>
				<h1 className="pt-5 text-8xl display-1 text-[#DAA520FF]">ॐ</h1>
			</div>
		</>
	);
}
