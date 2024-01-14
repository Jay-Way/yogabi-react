export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-8 py-8 md:py-20">
			<div className="max-w-5xl text-center justify-center p-5">
				{children}
			</div>
		</section>
	);
}
