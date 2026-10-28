# Frontend API Integration Notes

This file describes the frontend's current API URL construction and flags known mismatches.

## Backend route prefixes

The backend mounts user routes at `/techedu/v1` and admin routes at `/techedu/v1/admin`. The frontend constants in `src/components/Constanst.js` currently use `https://techedu-1.onrender.com/` as the backend origin. Confirm this deployment is current before release.

## Current helpers

| File | Current behaviour | Notes |
|---|---|---|
| `src/components/Constanst.js` | Defines deployed base URL and user endpoint constants | Hard-coded; no Vite env variable |
| `src/components/card/getMovie.js` | Calls `GET /techedu/v1/admin/v/get/video/:videoId` | Path matches backend router |
| `src/components/playlist/getPlaylist.js` | Builds `GET /techedu/v1/admin/p/get/playlist/:playlistId` | Backend route is currently public |
| `src/components/utils/axios.js` | Axios base URL `http://localhost:8000/api/v1/admin/`; credentials enabled | Base path does not match backend route prefixes |
| `src/App.jsx` | Contains `axios.get()` without a URL and calls `useDispatch` inside a callback | Incomplete/non-working current-user flow; do not describe as working |

## Known backend routes used or referenced by the frontend

| Operation | Method | Path | Middleware in route |
|---|---|---|---|
| Request signup OTP | POST | `/techedu/v1/getOTP` | Public |
| Verify OTP | POST | `/techedu/v1/verifyOTP` | Public |
| Register user | POST | `/techedu/v1/register` | Public |
| Login | POST | `/techedu/v1/login` | Public |
| Current user | GET | `/techedu/v1/get-me` | `verifyJwt` |
| Logout | GET | `/techedu/v1/logout` | `verifyJwt` |
| Video by ID | GET | `/techedu/v1/admin/v/get/video/:videoId` | Public in current router |
| Playlist by ID | GET | `/techedu/v1/admin/p/get/playlist/:playlistId` | Public in current router |

## Integration recommendations

1. Use one configurable base URL (for example `VITE_API_BASE_URL`) instead of hard-coded URLs in multiple files.
2. Ensure the Axios instance uses the backend's actual prefix and use `withCredentials: true` consistently for cookie-authenticated routes.
3. React hooks such as `useDispatch` must be called at the top level of a component, not inside promise callbacks.
4. Check the exact response wrapper in backend `src/utils/ApiResponse.js` before relying on response fields.
5. The backend CORS list currently contains `http://localhost:5173`, `https://techedu-frontend.vercel.app` and `https://techedu-eta.vercel.app`.

Full route list: https://github.com/Banshraj1/techedu/blob/main/src/routes/ROUTES.md
