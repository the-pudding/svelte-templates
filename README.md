# Svelte Templates

This is a collection of svelte components for you to use and modify for your projects.

[See the components](https://pudding-svelte-templates.netlify.app/)

All of the templates live in the `/templates` folder.

## Adding a template

As you create new basic components for svelte projects, add them to the `/templates` folder!

If you want to add them to the site, first run the site:

```bash
npm install
npm run dev
```

...then add them to `/src/components/Templates.svelte`, using a `<Template>` component.

Make sure to import each template into `/src/components/templates-code.svelte` to make code capable of being copied with the "Copy code" buttons.

The website will automatically build & update (on Netlify) when changes are pushed.

## Template guidelines

By default, create an unstyled / MVP styled version. For an opinionated styling, put all CSS below the `/* gravy */` comment in your style tag.

Make sure any UI elements either [two-way bind](https://svelte.dev/docs#bind_component_property) or [dispatch an event](https://svelte.dev/docs#createEventDispatcher) so the component can expose values.
