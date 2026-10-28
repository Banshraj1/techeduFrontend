# TechEdu Frontend

React + Vite frontend for TechEdu, a video-streaming web application.

- Frontend repository: https://github.com/Banshraj1/techeduFrontend
- Backend repository: https://github.com/Banshraj1/techedu
- Backend route reference: https://github.com/Banshraj1/techedu/blob/main/src/routes/ROUTES.md

> This documentation describes the checked-in code. Some API helpers are inconsistent; read [API integration notes](docs/api-integration.md) before assuming every flow is production-ready.

## Features represented in the code

- React single-page application and React Router pages.
- Login, signup, email OTP verification and signup-success components.
- Video details lookup by ID and a player component.
- Redux Toolkit authentication state.
- Axios requests, including credentialed requests in selected helpers.
- Vite and Tailwind CSS integration; Vercel rewrite for client-side routes.

A component existing in the repository does not necessarily mean its full end-to-end flow is complete.

## Stack

React 19, Vite 8, React Router 7, Redux Toolkit, React Redux, Axios, Tailwind CSS 4, Video.js, HLS-related Video.js packages and Lucide React.

## Project structure

```text
hotstar/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about/ card/ development/ footer/ heroSection/
│   │   ├── home/ login/ navbar/ player/ playlist/
│   │   ├── signup/ slider/ sponsor/ utils/ verifiyotp/ watchpage/
│   │   └── Layout.jsx, index.js
│   ├── store/                 # Redux store and auth slice
│   ├── App.jsx
│   ├── main.jsx               # Router and React entry point
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

Some existing names are spelled `Constanst.js` and `verifiyotp`; preserve exact paths/casing in imports unless intentionally renaming them.

## Run locally

Requirements: Node.js/npm and backend access for API-backed features.

```bash
git clone https://github.com/Banshraj1/techeduFrontend.git
cd techeduFrontend
npm install
npm run dev
```

Vite prints the local URL (typically `http://localhost:5173`).

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite |
| `npm run build` | Build production assets |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Frontend routes

Routes are declared in `src/main.jsx` inside `Layout`.

| Path | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/login` | Login |
| `/signup` | OTP signup |
| `/signup-success` | Signup success |
| `/watch/:movieId` | Watch page |
| `/verify` | OTP verification |
| `/dev` | Development page |

These are browser routes, not backend API endpoints.

## Configuration and API base URLs

`src/components/Constanst.js` currently hard-codes `https://techedu-1.onrender.com/` and the prefix `techedu/v1/`. Confirm this is the active backend before deployment.

The Axios instance in `src/components/utils/axios.js` separately hard-codes `http://localhost:8000/api/v1/admin/`, which does not match the backend's mounted prefix. Some helpers construct full URLs using `Constanst.js`; see [API integration notes](docs/api-integration.md). A recommended improvement is to use a single `VITE_API_BASE_URL` variable and avoid duplicating base URLs.

## Video playback flow

1. The browser opens `/watch/:movieId`.
2. `WatchPage.jsx` reads `movieId` and calls `getMovie(movieId)`.
3. The helper requests `GET /techedu/v1/admin/v/get/video/:videoId`.
4. The page passes `movieData?.url` to `WatchVideo`, then to `MyPlayer`.
5. The backend currently stores an S3 HLS playlist URL ending in `index.m3u8`.

The playlist and referenced segments must both be reachable by the browser.

## Documentation

- [API integration notes](docs/api-integration.md)
- [Backend API reference](https://github.com/Banshraj1/techedu/blob/main/src/routes/ROUTES.md)
- [Backend architecture](https://github.com/Banshraj1/techedu/blob/main/docs/architecture.md)
- [Video processing and HLS](https://github.com/Banshraj1/techedu/blob/main/docs/video-processing.md)

## Troubleshooting

- API fails: check the browser Network tab, origin, route prefix and backend availability.
- Login does not persist: verify credentialed requests, CORS, HTTPS and cookie attributes.
- Deep link returns 404: ensure the deployed Vercel project includes `vercel.json`.
- Video fails: check the stored playlist URL, segment URLs, S3 permissions/CORS and content types.

Never commit secrets. Before submitting changes, run `npm run lint` and `npm run build`.
