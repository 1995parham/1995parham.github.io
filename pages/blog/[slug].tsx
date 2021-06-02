import React from "react";
import Title from "../../components/title";
import { GetStaticProps, GetStaticPaths } from "next";

interface Blog {
  title: string;
  content: string;
}

interface BlogProps {
  blog: Blog;
}

function BlogPostPage(props: BlogProps) {
  return (
    <section id="blog" className="bgWhite ofsInBottom">
      <div className="contact">
        <Title title={props.blog.title} />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="row">
              <div
                className="col-md-8"
                dangerouslySetInnerHTML={{ __html: props.blog.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// pass props to BlogPostPage component
export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  const fs = require("fs");

  const html = require("rehype-stringify");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const remark2rehype = require("remark-rehype");
  const format = require("rehype-format");

  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/posts/${slug}.md`;

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(remark2rehype)
    .use(format)
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
};

// generate HTML paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const fs = require("fs");

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
