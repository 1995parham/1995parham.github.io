import fs from "node:fs";
import matter from "gray-matter";
import type { GetStaticPaths, GetStaticProps } from "next";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import Title from "../../components/title";

interface Blog {
	title: string;
	content: string;
}

interface BlogProps {
	blog: Blog;
}

interface PathParams {
	slug: string;
	[key: string]: string;
}

function BlogPostPage(props: BlogProps) {
	return (
		<section id="blog" className="bgWhite ofsInBottom">
			<div className="content single">
				<Title title={props.blog.title} />
				<div className="block-content">
					<div className="block-content">
						<div className="row">
							<div className="block-posts clearfix">
								<div className="block-post single clearfix">
									<div className="col-md-12">
										<hr />
										<div
											// biome-ignore lint/security/noDangerouslySetInnerHtml: build-time HTML rendered from the author's own trusted Markdown posts
											dangerouslySetInnerHTML={{ __html: props.blog.content }}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// pass props to BlogPostPage component
export const getStaticProps: GetStaticProps<BlogProps, PathParams> = async (
	context,
) => {
	const slug = context.params?.slug; // get slug from params

	if (!slug) {
		throw new Error("Slug parameter is missing");
	}

	const path = `${process.cwd()}/posts/${slug}.md`;

	// read file content and store into rawContent variable
	const rawContent = fs.readFileSync(path, {
		encoding: "utf-8",
	});

	const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

	const result = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeHighlight) // highlight code block
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(content); // pass content to process

	return {
		props: {
			blog: {
				...(data as Blog),
				content: result.toString(),
			},
		},
	};
};

// generate HTML paths at build time
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
	const path = `${process.cwd()}/posts`;
	const files = fs.readdirSync(path, "utf-8");

	const markdownFileNames = files
		.filter((fn: string) => fn.endsWith(".md"))
		.map((fn: string) => fn.replace(".md", ""));

	return {
		paths: markdownFileNames.map((fn: string) => {
			return {
				params: {
					slug: fn,
				},
			};
		}),
		fallback: false,
	};
};

export default BlogPostPage;
