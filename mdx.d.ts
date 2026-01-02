declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  const MDXComponent: (props: MDXProps) => JSX.Element;
  export const frontmatter: Record<string, unknown>;
  export default MDXComponent;
}
