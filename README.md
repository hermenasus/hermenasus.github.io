# Ethan profile

Ethan Chen personal profile website.

## What is included

- Premium business-style personal website
- Profile, consulting topics, career timeline, contact links, media gallery, and user reviews
- Bundled Zaih reviews saved in `reviews-data.js`, with live comments synced on page load
- Local Zaih media assets saved in `assets/`
- LinkedIn and Zaih landing page links

## Preview

Run:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4173
```

## Public Deployment

This site should be deployed as a small Node.js web service, not as static files only.
The `/api/comments` route proxies the Zaih comments API so the reviews can sync on every page load.

### Recommended: Render

1. Push this folder to a GitHub repository.
2. In Render, create a new **Web Service** from that repository.
3. Use these settings:
   - Runtime: `Node`
   - Build command: leave empty, or use `npm install`
   - Start command: `npm start`
4. Deploy. Render will provide a public URL after the build finishes.

The server reads Render's `PORT` environment variable automatically.

### Other Node Hosts

Any host that can run a Node.js service works. Use:

```bash
npm start
```

The server listens on `0.0.0.0` by default for deployment, and uses `PORT` when the host provides it.

## Source Links

- LinkedIn: https://www.linkedin.com/in/ethanchen1/
- Zaih landing page: https://www.zaih.com/falcon/mentors/2bllbjjbq3k
