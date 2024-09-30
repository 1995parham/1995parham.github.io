import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Title from "../components/title";
import fs from "fs";
import matter from "gray-matter";
import { v4 as uuidv4 } from "uuid";

interface BlogProps {
  posts: PostInfo[];
}

interface PostInfo {
  id: any;
  title?: string;
  date?: Date;
  tags?: string[];
  slug: string;
}

export default function IndexPage(props: BlogProps) {
  return (
    <section id="contact" className="bgWhite ofsInBottom">
      <div className="contact">
        <Title title="Blog" />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="row">
              <div className="col-md-8">
                <ul>
                  <li><Link href="https://github.com/1995parham-learning/cloud-roadmap">Cloud Engineer Roadmap</Link></li>
                  <li><Link href="https://github.com/1995parham-teaching/interviews">Getting ready for interviews</Link></li>
                  {props.posts.map((post,) => {
                    return (
                      <li key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                          {`${post.title} @ ${post.date}`}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");

  const posts: PostInfo[] = files
    .filter((fn: string) => fn.endsWith(".md"))
    .map((fn: string) => {
      const path = `${process.cwd()}/posts/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuidv4(), slug: fn.replace(".md", "") };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { posts: posts },
  };
};
