# Sunny, a calendar & todo app made in Nuxt

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more. To selfhost:

- Create a [Firebase](https://console.firebase.google.com/) project with Authentication and Firestore enabled
- Rename example.env to .env and put in your Firebase credentials
- Not sure if you need to run firebase init. Tbd lol.
- Run `firebase functions:secrets:set POSTMARK_API_KEY`, and set it to your API key.
- `firebase deploy` for the rules n functions (eventually)

## Setup

Make sure to install the dependencies:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev
```

## Production

Build the application for production:

```bash
# bun
bun run build
```

Locally preview production build:

```bash
# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
