# Book

AI-powered platform for having real-time voice conversations with your books. Upload PDFs, choose from natural-sounding AI voices, and discuss your library using voice—with live transcripts and a modern UI.

## Tech Stack

- **Next.js 16** – React framework, server components, API routes
- **TypeScript** – Static typing and tooling
- **Clerk** – Authentication (email and social login)
- **Vapi** – Real-time voice AI conversations
- **ElevenLabs** – Text-to-speech and voice personas
- **MongoDB + Mongoose** – Database for books, segments, and sessions
- **Vercel Blob** – File storage for uploads
- **Tailwind CSS + Shadcn UI** – Styling and components

## Features

- **PDF upload & ingestion** – Upload books, automated text extraction, chunking, and embeddings for search
- **Voice conversations** – Real-time voice chat with your books via Vapi
- **AI voice personas** – Multiple ElevenLabs voices with previews
- **Summaries & insights** – Chapter summaries and on-demand deep-dives
- **Session transcripts** – Full transcripts for every voice session
- **Library & search** – Organize and search your uploads
- **Auth & subscriptions** – Sign-in and optional billing for premium features

## Quick Start

**Prerequisites:** Node.js, npm, and (for full functionality) accounts for Clerk, Vercel Blob, MongoDB, Vapi, Google AI Studio (Gemini), and ElevenLabs.

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Create a `.env` in the project root with:

   ```env
   NODE_ENV='development'
   NEXT_PUBLIC_BASE_URL=

   # CLERK
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # VERCEL BLOB
   BLOB_READ_WRITE_TOKEN=

   # MONGODB
   MONGODB_URI=

   # VAPI
   NEXT_PUBLIC_VAPI_API_KEY=
   VAPI_SERVER_SECRET=

   # Google Gemini API for embeddings
   GOOGLE_GEMINI_API_KEY=

   # ELEVENLABS
   ELEVENLABS_API_KEY=
   ```

   Add your keys from [Clerk](https://clerk.com), [Vercel](https://vercel.com), [MongoDB](https://www.mongodb.com), [Vapi](https://vapi.ai), [Google AI Studio](https://aistudio.google.com), and [ElevenLabs](https://elevenlabs.io).

3. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` – Next.js app router (pages, layout, API routes)
- `components/` – React components and UI
- `lib/` – Utilities, constants, actions, and server logic
- `database/` – Mongoose models and connection
- `public/` – Static assets

## License

MIT
