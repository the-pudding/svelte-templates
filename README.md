# Svelte Templates

This is a collection of svelte components for you to use and modify for your projects.

[See the components](https://pudding-svelte-templates.netlify.app/)

All of the templates live in the `/templates` folder.

## Template guidelines

By default, create an unstyled / MVP styled version. For an opinionated styling, put all CSS below the `/* gravy */` comment in your style tag.

Make sure any UI elements either [two-way bind](https://svelte.dev/docs#bind_component_property) or [dispatch an event](https://svelte.dev/docs#createEventDispatcher) so the component can expose values.

## Adding a template

As you create new basic components for svelte projects, add them to the `/templates` folder!

Then, you can add documentation about your fancy new component to the site!

Inside `src/components/sections` you'll find an individual svelte file for each top-level section on our site. Currently, they are:
* UI Elements
* Pagination
* Page Structure
* Data & Code
* Decoration

If your new component fits well under one of those categories, jump ahead to [Adding Documentation for a New Template](#newTemplate). Otherwise, start at [Adding Documentation for a New Section](#newSection).

## <a name="newSection"></a> Adding Documentation for a New Section

Each section should have its own file in `src/components/sections` so go ahead and add one. In it, you'll want to import the component `DocTemplate`.

```svelte
import DocTemplate from './../DocTemplate.svelte'
```

Then, add a new `h2` element with the title for your section. 

```
<h2>UI Elements</h2>
```

Now that your section component is all set up, let's make sure it'll render on the site. Import your new component in `src/routes/index.svelte`:

```
import UI from './../components/sections/UI.svelte'
```

and adding the component to the list of other components:
```
<UI />
<Pagination />
```

Great! Now you can add documentation for your component to your newly created section.

## <a name="newTemplate"></a> Adding Documentation for a New Template

To keep component documentation consistent, we'll use the component `DocTemplate` for each. This template expects 4 props of required information, and then contains slots for you to enter whatever information is relevant to your component. 

It also requires that you add the location of your code to the `components/templates-code.js` file, to enable code copying from the site.

### Props

| Name | Type | Description |
|------|------|-------------|
|componentLabel| string | The human readable label for your component that will appear on the site.|
|propDesc| Object of Objects | A series of objects, where each includes the `name`, `type`, and `description` of each prop your component expects |
|code|string|A string of code to be rendered for your code example (see below)|
|name|string|The filename of your component, without file extension |
___

If your code example is brief, you can type it directly into the `<script>` tags of your section's svelte component. But in most cases,  you want the example to be as complete as possible. So, you can add a separate svelte component to `src/components/examples`. Then import that file and render it into a string:
```
import CheckboxExample from '!!raw-loader!./../../examples/CheckboxExample.svelte'
```
The `raw-loader` library converts the code to a string so it can be rendered in a code block. 


### Slots
The `DocTemplate` component contains 6 slots where you can add additional information in whatever way makes the most sense. The slots are:

|Name|Description|
|----|------------|
|description| A brief description of what your component does or when people should uses it. Defaults to "What you see is what you get!"|
|view| A link to where a user can view your code on GitHub is automatically included. If this component is available to view elsewhere (e.g., a Svelte Repl) adding a link to that here would be ideal. |
|other| A space directly below the `Copy Code` buttons to add extra information like any required libraries or links to other components that this one may need.|
|examples| Space to add working examples of your component |
|bound| Description of any props that have been exposed to binding on the parent component. Defaults to "This component doesn't expose any props for binding."|
|a11y| Accessibility notes or considerations. Note whether your component uses semantic elements, is keyboard or screen-reader navigable, or any accessibility warnings for using this component |
----
For information on how to use slots, check out the [Svelte docs](https://svelte.dev/tutorial/named-slots).


## Working with the site
To locally test if your documentation looks the way you expect, you'll want to take a look at the site. Make sure this repo is cloned on your machine and then in your terminal:

```bash
npm install
npm run dev
```

When possible, work in a branch until all of the changes look good and then merge it to the main branch.

The website will automatically build & update (on Netlify) when changes are pushed to the main branch.


