import { CodeBlock } from "@vercel/geist/components";

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

function Component(): JSX.Element {
  return (
    <CodeBlock
      aria-label="Hello world"
      filename="Table.jsx"
      highlightedLinesNumbers={[1, 4]}
      language="jsx"
    >
      {code}
    </CodeBlock>
  );
}

export default function Page() {
  return (
    <div>
      <Component />
    </div>
  );
}
