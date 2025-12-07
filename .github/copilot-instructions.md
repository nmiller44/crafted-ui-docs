This repository documents the Crafted UI React component library. All documentation is for React.

This repository uses Astro equivilents of the React components. Use the Astro components for Sample pages, but don't add any Astro specific code to the documentation. This is React documentation.

The Astro components should mimic the visual of the React components, but don't require the interactivity. Use the same props and other configurations as the React components, so they are as close as possible.

When updating documentation files, use the button.astro file as a reference.

## Using Crafted Components

**CRITICAL**: All examples, Bento blocks, and sample pages in this repository MUST use Crafted UI components wherever possible. The purpose of this documentation site is to demonstrate Crafted UI components in action.

### Component Usage Guidelines

1. **Always prefer Crafted components** over raw HTML elements:
   - Use `<Button>` instead of `<button>`
   - Use `<Input>` instead of `<input>`
   - Use `<Field>` wrapper for form inputs
   - Use `<Heading3>`, `<Heading4>`, etc. instead of raw `<h3>`, `<h4>`
   - Use `<Badge>` for tags and labels
   - Use Crafted layout components when available

2. **Default prop values**:
   - **NEVER explicitly set props to their default values** in documentation or examples
   - This pattern shows users what happens when props are omitted
   - Only specify props when using non-default values
   - Common examples:
     - Input `type` defaults to `"text"` - never use `type="text"`
     - Button `type` defaults to `"button"` - never use `type="button"`
     - FieldInset `position` defaults to `"right"` - never use `position="right"` unless showing the explicit option
   
   Examples:
   - ❌ `<Input type="text" placeholder="Name" />` (redundant - text is default)
   - ✅ `<Input placeholder="Name" />` (correct - shows default behavior)
   - ✅ `<Input type="email" placeholder="Email" />` (correct - not default)
   - ❌ `<Button type="button">Click</Button>` (redundant - button is default)
   - ✅ `<Button>Click</Button>` (correct - shows default behavior)
   - ✅ `<Button type="submit">Submit</Button>` (correct - not default)

3. **Bento examples** (`src/components/bento-examples/`):
   - Must showcase Crafted UI components
   - Are demonstrations of how to combine components
   - Should avoid raw HTML elements except for structural containers
   - Use Crafted components for all interactive elements and content

4. **When core components are missing**:
   - **ALWAYS create the missing Astro component** in both `crafted-astro` and `crafted-ui-docs` repositories
   - Astro components should mimic the visual appearance of React components
   - Use simplified implementations (native HTML elements with Crafted styling) when Base UI primitives are not needed
   - **NEVER use placeholder text** like "Component preview not yet available"
   - If a component truly cannot be created, notify the user immediately with a list of blockers

5. **Creating Astro Components**:
   - Create component files in both repositories:
     - `crafted-astro/src/components/{component-name}/`
     - `crafted-ui-docs/src/components/{component-name}/`
   - Match the React component's props interface as closely as possible
   - Use the same styling classes from the React component
   - For interactive components (Select, Radio, Checkbox), use native HTML elements with custom styling
   - Examples:
     - Select → use `<select>` with custom styling
     - Radio → use `<input type="radio">` with custom styling
     - Checkbox → use labeled structure with checkbox visual

6. **Available Crafted Components** (check `src/components/` directories):
   - Button, Input, Field, FieldLabel, Fieldset
   - Badge, Avatar, Card
   - Heading1-5, Section, Page
   - BentoCard, BentoGrid
   - Metric, Empty
   - And more - always check what's available before creating raw HTML

### Example - Good vs Bad

❌ **Bad** - Using raw HTML:
```astro
<div class="flex items-center space-x-2">
    <input type="checkbox" />
    <label>Accept terms</label>
</div>
```

✅ **Good** - Using Crafted components:
```astro
<Field>
    <Checkbox>Accept terms</Checkbox>
</Field>
```

## Adding New Documentation Pages

When creating documentation for new components:

1. **Create the .mdx file** in the appropriate directory following the Storybook hierarchy:
   - Layout components → `src/pages/docs/layout/`
   - Components → `src/pages/docs/components/`
   - Forms → `src/pages/docs/forms/`

2. **Create Astro components** (if needed):
   - Add to `src/components/{component-name}/` in crafted-ui-docs
   - Add to `src/components/{component-name}/` in crafted-astro
   - Match React component props and visual design

3. **Update navigation** in `src/data/sidebar.ts`:
   - Add the new page to the appropriate section
   - Keep items alphabetically sorted within each section
   - Follow the format: `{ title: 'Component Name', href: '/docs/section/component-name' }`

4. **Update llms.txt** in `public/llms.txt`:
   - Add the new page to the appropriate section (Layout Components, UI Components, or Form Components)
   - Include a brief description of the component's purpose
   - Keep items alphabetically sorted within each section
   - Follow the format: `- ComponentName: /docs/section/component-name - Brief description of functionality`

5. **Use examples from Storybook**:
   - Documentation examples should match the stories file
   - Use the same themed examples (e.g., craft beer examples)
   - Keep consistency between Storybook and documentation

## Updating Existing Documentation Pages

When editing or updating existing documentation pages:

1. **Props tables**:
   - Replace any "undefined" default values with a dash (`-`)
   - This provides a cleaner, more consistent appearance
   - Example: Change `| className | string | undefined |` to `| className | string | - |`

2. **Component descriptions**:
   - **Document React components**, not Astro implementations
   - Reference Base UI components when applicable (e.g., "accepts all props from the Base UI Field.Root component")
   - Describe React-specific behavior accurately (e.g., automatic error inclusion, controlled/uncontrolled patterns)
   - The examples may use Astro for preview, but the documentation text describes the React API

## CodePreview Component

The `CodePreview` component is used to display interactive examples with both preview and code views in documentation pages.

### Usage Pattern

```mdx
import CodePreview from "@/components/CodePreview.astro";
import ComponentName from "@/components/component-name/ComponentName.astro";

<CodePreview code={`
    <ComponentName prop="value">Content</ComponentName>
`}>
    <div class="flex flex-wrap gap-4">
        <ComponentName prop="value">Content</ComponentName>
    </div>
</CodePreview>
```

**Key Point**: The `code` prop contains only the component(s) users need. The preview slot can include wrapper divs for layout.

### Key Principles

1. **Code Prop for React Documentation**:
   - The `code` prop shows the React/TypeScript implementation
   - Use React syntax: `className`, `<Input />`, etc.
   - This is what users will copy and use in their React projects
   - **NEVER include wrapper divs for sizing/formatting** (e.g., `<div className="max-w-md">`)
   - **Only include essential component code** that users need
   - Wrapper divs for display purposes go ONLY in the preview slot, never in the code prop

2. **Slot Content for Astro Preview**:
   - The slot content (children) renders the actual preview
   - Use Astro components and HTML for the visual preview
   - Use Astro/HTML syntax: `class`, raw `<input>` elements when needed
   - **CAN include wrapper divs for layout/sizing** (e.g., `<div class="max-w-md">`)
   - **DO NOT nest Cards inside CodePreview** unless absolutely necessary (e.g., Card component documentation)
   - Cards inside CodePreviews create visual confusion - users should see the component standalone
   - Wrappers are for visual presentation only and won't be copied by users

3. **Keep Them Aligned**:
   - The visual output should match what the React code would produce
   - Same structure, props, and styling (minus display wrappers)
   - The only difference is React vs Astro syntax and optional preview-only wrappers

4. **CRITICAL: Inline Component Content**:
   - **ALWAYS write component content inline, NOT on separate lines**
   - MDX wraps multiline content in `<p>` tags, which breaks styling
   - This applies to ALL components, especially Buttons
   
   Examples:
   - ❌ **WRONG** - Multiline content gets wrapped in `<p>` tags:
     ```astro
     <Button clr="primary">
         Save Changes
     </Button>
     ```
     Renders as: `<button><p>Save Changes</p></button>` (broken styling!)
   
   - ✅ **CORRECT** - Inline content:
     ```astro
     <Button clr="primary">Save Changes</Button>
     ```
     Renders as: `<button>Save Changes</button>` (correct!)
   
   - This rule applies to all components with text content: Button, Badge, Heading, etc.
   - Only use multiline when nesting components, never for plain text

### Example from button.mdx

```mdx
<CodePreview code={`
    <Button>Default</Button>
    <Button clr="primary">Primary</Button>
`}>
    <div class="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button clr="primary">Primary</Button>
    </div>
</CodePreview>
```

Notice how the `code` prop contains ONLY the essential Button components that users need, while the preview slot includes a wrapper div with `flex flex-wrap gap-4` for proper visual layout. Users will copy the clean component code, but see a nicely formatted preview.

### Features

- **Tab switching**: Preview and Code tabs powered by AlpineJS
- **Code highlighting**: Syntax highlighting using Shiki with GitHub Dark theme
- **Copy button**: One-click copy of the React code
- **Normalized indentation**: Automatically trims and normalizes code formatting
- **Responsive layout**: Works well on all screen sizes

### CRITICAL: Component Placement in Documentation

**CRITICAL: CodePreview and SamplePage components MUST be placed OUTSIDE of Section components.**

Section components use prose styling which interferes with CodePreview and SamplePage styling and layout. This causes visual bugs like incorrect text colors, broken layouts, and CSS custom property inheritance issues.

❌ **WRONG** - CodePreview or SamplePage inside Section:
```mdx
<Section title="Examples">
    ### Description
    This is an example.

    <CodePreview code={`...`}>
        ...
    </CodePreview>
    
    <SamplePage>
        ...
    </SamplePage>
</Section>
```

✅ **CORRECT** - CodePreview and SamplePage outside Section:
```mdx
<Section title="Examples">
    ### Description
    This is an example.
</Section>

<CodePreview code={`...`}>
    ...
</CodePreview>

<SamplePage>
    ...
</SamplePage>
```

**Pattern for multiple examples:**
```mdx
<Section title="Component">
    ### Description
    Component description and usage information.
</Section>

<CodePreview code={`...`}>
    {/* First example */}
</CodePreview>

<Section>
    ### Another Feature
    Description of the next feature.
</Section>

<SamplePage>
    {/* Sample page example */}
</SamplePage>

<Section>
    ### Props
    Props table and usage notes.
</Section>
```

**Key rules:**
- Documentation text goes INSIDE Section
- **CodePreview goes OUTSIDE Section** (at the same level)
- **SamplePage goes OUTSIDE Section** (at the same level)
- Props tables and usage notes stay INSIDE Section
- Use Section without title attribute for subsections
- This prevents CSS styling conflicts and ensures components render correctly