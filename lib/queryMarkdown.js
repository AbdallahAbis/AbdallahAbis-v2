import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import unwrapImages from 'remark-unwrap-images';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentByPath(targetPath) {
	const targetedDirectory = path.join(contentDirectory, targetPath.toString());
	// Get file names under /content
	const fileNames = fs.readdirSync(targetedDirectory);

	let posts = [];

	const targetedContent = fileNames.map(async (fileName) => {
		// Read markdown file as string
		const fullPath = path.join(targetedDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Use remark to convert markdown into HTML string
		const processedContent = await remark()
			.use(html)
			.process(matterResult.content);
		const contentHtml = processedContent.toString();

		if (targetPath === 'blog') {
			return posts.push({
				...matterResult.data,
				contentHtml: contentHtml,
			});
		}

		// Combine the data with the id
		return {
			...matterResult.data,
			contentHtml: contentHtml.slice(3, contentHtml.length - 5), // removed the <p></p> from the returned HTML
		};
	});

	return targetPath === 'blog' ? posts : targetedContent[0];
}

export async function getSinglePost(title) {
	const blogs = await getContentByPath('blog');
	const targetedPost = blogs.filter(
		(blogPost) => blogPost.title.replace(/[^A-Z0-9]+/gi, '-') === title
	);

	return targetedPost[0];
}

export function getPostBySlug(slug, fields = []) {
	const postsDirectory = path.join(contentDirectory, 'blog');
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = path.join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items = {};
	// Looking to remove images from P tags

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}
