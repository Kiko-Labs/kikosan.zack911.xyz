import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

// Function to load MDX content from a file
const loadMDXContent = async (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return serialize(fileContent); // Serializes MDX content to render in the page
};

const DocsPage = ({ mdxSource }) => {
  return (
    <div>
      <h1>Docs</h1>
      {/* Render MDX content */}
      <MDXRemote {...mdxSource} />
    </div>
  );
};

// This function returns an array of paths to be pre-rendered
export async function getStaticPaths() {
  const docsDirectory = path.join(process.cwd(), 'src/pages/docs');

  // Recursively gather all MDX file paths from subdirectories
  const getFilePaths = (dir) => {
    const files = fs.readdirSync(dir);
    return files
      .map((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          return getFilePaths(fullPath); // Recursively handle subdirectories
        }
        if (fullPath.endsWith('.mdx')) {
          return fullPath.replace(docsDirectory, '').replace('.mdx', ''); // Return relative path
        }
        return null;
      })
      .flat()
      .filter(Boolean);
  };

  const paths = getFilePaths(docsDirectory).map((slug) => ({
    params: { slug: slug.split('/').filter(Boolean) }, // Split path into slug segments for dynamic routing
  }));

  return {
    paths,
    fallback: false, // Set to true/false depending on if you want fallback pages
  };
}

// This function fetches the MDX content for a specific path and passes it as a prop
export async function getStaticProps({ params }) {
  const slug = params.slug.join('/'); // Join the slug array to create the file path
  const filePath = path.join(process.cwd(), 'src/pages/docs', `${slug}.mdx`); // Path to the MDX file

  const mdxSource = await loadMDXContent(filePath); // Load and serialize MDX content

  return {
    props: {
      mdxSource, // Pass the serialized MDX content to the page as a prop
    },
  };
}

export default DocsPage;
