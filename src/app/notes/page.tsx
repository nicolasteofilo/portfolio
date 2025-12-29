import Link from "next/link";
import { notes } from "@/data/notes";

export default function Notes() {
	return (
		<main className="flex flex-col gap-4 max-w-3xl mx-auto bg-background p-6 pb-24 sm:gap-8 sm:pt-16 sm:pb-28 sm:px-4">
			<h2 className="text-lg font-medium">Notes</h2>

			{notes.length === 0 ? (
				<p className="text-sm text-muted-foreground">No notes yet.</p>
			) : (
				<ul className="flex flex-1 flex-col gap-2 h-fit">
					{notes.map((note) => (
						<li key={note.slug}>
							<Link
								className="group flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-4 sm:py-6"
								href={`/notes/${note.slug}`}
							>
								<span className="flex min-w-0 flex-1 flex-col gap-1">
									<span className="inline-block w-fit text-base font-medium break-words bg-[linear-gradient(currentColor,currentColor)] bg-left-bottom bg-no-repeat bg-[length:0_1px] pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
										{note.title}
									</span>
									<span className="text-sm text-muted-foreground break-words">{note.description}</span>
								</span>
								<span className="flex flex-wrap items-start gap-x-3 gap-y-1 text-xs text-muted-foreground sm:flex-col sm:items-end sm:gap-y-1">
									<span className="tabular">{note.language}</span>
									<span className="tabular">{note.date}</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
