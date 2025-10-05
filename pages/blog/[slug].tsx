import React from "react";
import Title from "../../components/title";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";

import "highlight.js";
import "highlight.js/styles/github.css";

import rehypeStringify from 'rehype-stringify';
import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeHighlight from 'rehype-highlight'
import remarkRehype from "remark-rehype";
import rehypeFormat from 'rehype-format';
import remarkGfm from "remark-gfm";

import matter from "gray-matter";

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
  context
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
