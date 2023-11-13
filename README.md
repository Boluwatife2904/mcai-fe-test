# Documentation

This is a brief overview of the assessment for the role of a frontend developer at [MyCoverAI](https://www.mycover.ai/).

## Deployment

This is currently hosted on Vercel and can be viewed at https://mcai-fe-test.vercel.app

## Stack

This was built primarily using Nuxt, Typescript, TailwindCSS for styling and Pinia for state management.

## Packages installed

-   ESLint/Prettier - Linting and Code formatting
-   Nuxt-Vitest, Happy-DOM, Vue-Test-Utils - Code testing
-   [NuxtIcons](https://nuxt.com/modules/icons) - Dynamically loading svgs in the assets/icon folder and render on the page
-   [Pinia-persisted-state](https://prazdevs.github.io/pinia-plugin-persistedstate/) - For persisting the pinia stored to the cookie storage.
-   SASS - This was used for handling of custom styles
-   [Vue3RadialProgress](https://vue3-radial-progress.vercel.app/) - Component used for displaying the progress bar component
-   [Vuelidate](https://vuelidate-next.netlify.app/) - This was used for form validations
-   [Vue Charts](https://vue-chart-3.netlify.app/guide/#introduction) - Chart Library for displaying Bar chart component
-   [VueUse](https://vueuse.org/) - Useful for onClickOutside (performing action when a click happens outside of a component), useWindowSize (getting device width)

## Setup

Make sure to install the dependencies:

```bash

# yarn
yarn install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev

```

## Production

Build the application for production:

```bash
# yarn
yarn build

```

Locally preview production build:

```bash
# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
