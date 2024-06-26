export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-8 py-8 md:py-20">
			<div className="inline-block max-w-5xl text-center justify-center">
				{children}
			</div>
		</section>
	);
}
