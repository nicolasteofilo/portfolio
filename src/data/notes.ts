export type NoteMeta = {
  title: string;
  description: string;
  date: string;
  language: "English" | "Portuguese";
  slug: string;
};

const notesContext = require.context("../app/notes/(notes)", true, /page\.mdx$/);

const rawNotes = notesContext.keys().map((key: string) => {
  const slug = key.replace("./", "").replace("/page.mdx", "");
  const noteModule = notesContext(key) as {
    noteMeta?: Omit<NoteMeta, "slug">;
  };

  return noteModule.noteMeta ? { ...noteModule.noteMeta, slug } : null;
});

export const notes = rawNotes
  .filter((note): note is NoteMeta => Boolean(note))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
