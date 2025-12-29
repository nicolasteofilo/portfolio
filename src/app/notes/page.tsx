import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { notes } from "@/data/notes";

export default function Notes() {
	return (
		<main className="flex flex-col gap-4 max-w-2xl mx-auto bg-background p-6 pb-24 sm:gap-8 sm:pt-16 sm:pb-28 sm:px-4">
			<h2 className="text-lg font-medium">Notes</h2>

			{notes.length === 0 ? (
				<p className="text-sm text-muted-foreground">No notes yet.</p>
			) : (
				<ul className="flex flex-1 flex-col gap-2 h-fit">
					{notes.map((note) => (
						<li key={note.slug}>
							<Button asChild variant="ghost">
								<Link
									className="w-[calc(100%+32px)] justify-between -mx-4 gap-4 px-6 py-8 rounded-lg"
									href={`/notes/${note.slug}`}
								>
									<span className="flex flex-col gap-1">
										<span className="text-base">{note.title}</span>
										<span className="text-sm text-muted-foreground">{note.description}</span>
									</span>
									<Separator className="mx-2 flex grow shrink mix-blend-multiply dark:mix-blend-lighten" />
									<span className="flex flex-col items-end gap-1">
										<span className="tabular text-xs font-normal text-muted-foreground">{note.language}</span>
										<span className="tabular text-xs font-normal text-muted-foreground">{note.date}</span>
									</span>
								</Link>
							</Button>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
