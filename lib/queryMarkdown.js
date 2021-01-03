import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentByPath(targetPath) {
	const targetedDirectory = path.join(contentDirectory, targetPath.toString());
	// Get file names under /content
	const fileNames = fs.readdirSync(targetedDirectory);

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

		// Combine the data with the id
		return { contentHtml, ...matterResult.data };
	});

	return targetedContent[0];
}
