This repository documents the Crafted UI React component library. All documentation is for React.

This repository uses Astro equivilents of the React components. Use the Astro components for Sample pages, but don't add any Astro specific code to the documentation. This is React documentation.

The Astro components should mimic the visual of the React components, but don't require the interactivity. Use the same props and other configurations as the React components, so they are as close as possible.

When updating documentation files, use the button.astro file as a reference.

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

4. **Use examples from Storybook**:
   - Documentation examples should match the stories file
   - Use the same themed examples (e.g., craft beer examples)
   - Keep consistency between Storybook and documentation