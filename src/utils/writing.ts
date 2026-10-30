import { getCollection, type CollectionEntry } from "astro:content";

export type WritingPost = CollectionEntry<"writing">;

/** Published (non-draft) posts, newest first. */
export const getPosts = async (): Promise<WritingPost[]> => {
	const posts = await getCollection("writing", ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
};

export const formatPostDate = (date: Date): string =>
	date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
