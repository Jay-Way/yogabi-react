export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="md:flex md:flex-col md:items-center md:justify-center md:gap-4 py-8 md:py-10">
			<div className="md:overflow-x-scroll">
				{children}
			</div>
		</section>
	);
}
