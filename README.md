# Bhavit Goyal Portfolio

A responsive React and Vite portfolio for Bhavit Goyal, a Computer Science & Engineering student at Bennett University.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personal links

Update `profile` in `src/data.js` with your email address, GitHub URL, LinkedIn URL, and resume URL. Each project has a `playUrl` field for its Play Now button, plus `demoUrl` and `sourceUrl` fields for additional links. Add the destination URL to `playUrl` when the playable build is ready; the button stays disabled until then.

To add a project video, place the file under `public/videos/` and set that project's `video` value in `src/data.js` to a path such as `/videos/royal-run.mp4`. Visitors can play configured videos, but cannot upload their own files through the site.