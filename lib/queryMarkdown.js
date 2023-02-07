import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from "remark";
import html from "remark-html";
import { getPlaiceholder } from "plaiceholder";
import { promisify } from "util";

const contentDirectory = path.join(process.cwd(), "content");

export function getContentByPath(targetPath) {
  const targetedDirectory = path.join(contentDirectory, targetPath.toString());

  const fileNames = fs
    .readdirSync(targetedDirectory)
    .filter((file) => file.endsWith(".md"));

  let posts = [];

  const targetedContent = fileNames.map(async (fileName) => {
    // Read markdown file as string
    const fullPath = path.join(targetedDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    if (targetPath === "blog") {
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

  return targetPath === "blog" ? posts : targetedContent[0];
}

export async function getBlogPosts() {
  const postsDirectory = fs.readdirSync(
    path.join(contentDirectory, "blog/posts")
  );

  const data = await Promise.all(
    postsDirectory.map(async (subDir) => {
      const post = await getContentByPath(path.join("blog/posts", subDir));
      if (!post.thumbnail) return;
      const imgSrc = await promisify(fs.readFile)(
        path.join(process.cwd(), "public", post.thumbnail)
      );
      const authorImgSrc = await promisify(fs.readFile)(
        path.join(process.cwd(), "public", post.author.image)
      );

      const { css: blurredImage } = await getPlaiceholder(imgSrc);
      const { css: blurredAuthorImage } = await getPlaiceholder(authorImgSrc);

      return { ...post, blurredImage, blurredAuthorImage };
    })
  );

  return data;
}

export async function getSinglePost(title) {
	const blogs = await getContentByPath('blog');
	const targetedPost = blogs.filter(
		(blogPost) => blogPost.title.replace(/[^A-Z0-9]+/gi, '-') === title
	);

	return targetedPost[0];
}

export function getPostBySlug(slug, fields = []) {
	const postsDirectory = fs.readdirSync(
		path.join(contentDirectory, 'blog/posts')
	);
	const pureSlug = slug.replace(/\.md$/, '');
	const fullPath = path.join(
		contentDirectory,
		'blog/posts',
		pureSlug,
		`${pureSlug}.md`
	);

	const items = {};

	postsDirectory.forEach((postDir) => {
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);

		// Ensure only the minimal needed data is exposed
		fields.forEach(async (field) => {
			if (field === 'slug') {
				items[field] = pureSlug;
			}
			if (field === 'content') {
				items[field] = content;
			}

			if (data[field]) {
				items[field] = data[field];
			}
		});
	});

	return items;
}
