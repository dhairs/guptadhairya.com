import { readFileSync, readdirSync } from 'fs';

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), 'src', type));
}

export async function getAllFilesFrontMatter(type) {
  const files = readdirSync(join(process.cwd(), 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}
