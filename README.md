# Linkr — front-end

A link-sharing social network. Users publish a link with a comment, the feed renders
a preview of the target page, and posts can be liked, commented on, reposted, and
tagged with hashtags. Four-person team project.

**Live:** https://linkr-frontend-nine.vercel.app

## Features

- **Auth** — sign up and sign in. Token and user are held in React context and
  mirrored to `localStorage`, so a refresh keeps the session.
- **Timeline** — infinite scroll (`react-infinite-scroller`), paginated. A polling
  interval (`use-interval`) checks for posts published since the last load and
  surfaces them without a reload.
- **Link previews** — title, description, image, and host of the shared link,
  opening the target in a new tab.
- **Likes / dislikes** — with a tooltip (`react-tooltip`) listing who liked a post.
- **Comments** — expandable per post, with an indicator when the commenter is
  someone the current user follows.
- **Reposts** — share another user's post onto your own timeline.
- **Follow / unfollow** — the timeline is scoped to followed users, with an explicit
  empty state rather than a blank page.
- **Hashtags** — parsed out of post text into links, with a per-hashtag route
  (`/hashtag/:hashtag`) and a trending sidebar.
- **User search** — debounced (`react-debounce-input`) so typing does not fire a
  request per keystroke.
- **Edit / delete** — inline edit of your own post description; delete behind a
  confirmation modal (`react-modal`). Errors surface as toasts, never as `alert()`.

## Stack

React 18 (CRA) · React Router 6 · styled-components · axios · react-toastify ·
react-modal · react-tooltip · react-icons · react-infinite-scroller

## Structure

```
src/
  Pages/        Home (sign in), Signup, Timeline, User, hashtag
  components/   Post, Comments, Likes, Follow, Header, Search,
                PostsPreview, UserImage, UserHeardline
  contexts/     TokenContext, UserContext
  services/     postsApi, userAPI, followApi, searchApi — axios wrappers,
                one module per API domain
  styles/       GlobalStyle
```

Routing lives in `App.js`; state is two contexts (token, user) with everything else
local to the component that owns it.

## Running locally

```bash
npm install
npm start
```

Set `REACT_APP_API_URL` to a running instance of the Linkr back-end — `App.js`
reads it into the `ApiURL` used by every request.

## Team

Built by [CaioCZS](https://github.com/CaioCZS),
[xaviervamanda](https://github.com/xaviervamanda),
[montenegroleticia](https://github.com/montenegroleticia), and
[andreymudri](https://github.com/andreymudri) — 159 commits, split roughly evenly.
