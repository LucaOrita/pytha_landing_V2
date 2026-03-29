import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    CodeBlock,
    Files,
    File,
    Folder,
    Step,
    Steps,
    Tab,
    Tabs,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="rounded-r-lg border-l-4 border-[#8a1820] bg-[#fff1f2]/30 py-2 pl-4 italic text-gray-600"
        {...props}
      >
        {children}
      </blockquote>
    ),
    ...components,
  };
}

export default getMDXComponents;
