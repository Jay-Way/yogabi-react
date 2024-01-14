export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-1 md:gap-4 pl-1 pr-1 py-4 md:py-10">
			<div className="inline-grid md:grid-cols-3 grid-cols-1 gap-1 md:gap-4">
				{children}
			</div>
		</section>
	);
}
