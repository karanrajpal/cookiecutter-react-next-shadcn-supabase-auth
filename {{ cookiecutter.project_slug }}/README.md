# {{ cookiecutter.project_name }}
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Adding Shadcn components
Shadcn lets you add components that you want to use one-by-one instead of installing all the packages. The code is then installed into the `components/ui` folder as opposed to `node_modules` and you can import it from anywhere.

See [this link](https://ui.shadcn.com/docs/components/input) for how to add an `Input` component

## Learn More

### Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Supabase Auth with Next.js
Check out [this guide](https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app)

## Deploy
Remember to setup your env variables on whatever platform you use to deploy. The env variables used by this codebase are in `.env.local`

### Deploy on Netlify
Make sure to have an account and have connected your github to Netlify.
You can deploy [from here](https://app.netlify.com/start)

### Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
