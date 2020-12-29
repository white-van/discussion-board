# 🧐 discussion-board

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## 📁 Project Structure

```text
.
├── backend
|   |── httpd
|   |   └── main.go                 # Contains the api routes for communication between the front and backend
|   |── scripts
|   |   └── setup.sh                # shell script for setting up go
|   |── storage                     # Contains database schema
|   |   |── discussion-board.sql
|   |   └── README.md
|   |── wss                         # Contains the go files for web socket communication
|   |   |── client.go
|   |   |── hub.go
|   |   └── main.go
|   └── README.md                   # Contains documentation and structure of backend api
├── frontend
│   ├── content
│   │   └── locale                  # Contains language files
│   ├── network                     # helpers for making http requests via axios
│   ├── pages
│   │   ├── api
│   │   ├── home
│   │   ├── _app.tsx                # providers/wrappers for app
│   │   └── index.tsx               # content for root page
│   ├── stores
│   ├── stories
│   └── styles
└── README.md                       # You are here! :)
```

## 💡 Contributing

discussion-board follows Gitflow

1. Fork the repo
2. `git remote add upstream https://github.com/white-van/discussion-board/`
3. `git fetch upstream`
4. `git rebase upstream/main`
5. `git checkout -b develop`
6. `git rebase upstream/develop`

### ⛏️ Featurework:

1. `git checkout -b DEV-000` (where 000 corresponds to the issue number)
2. Write your code
3. Open a PR from that branch to develop (in the main repo)
4. Fill out the pull request template accordingly
5. To be approved, code must have adequate test coverage + formatted properly

- Check frontend formatting with `npm run lint` and `make prettier`

7. Commits should be squashed

## 🚀 Local Development

1. Download Docker
2. `cd frontend && npm install`
3. `make run`

## 🏁 License

Distributed under the MIT License. See `LICENSE` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/white-van/discussion-board
[contributors-url]: https://github.com/white-van/discussion-board/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/white-van/discussion-board
[forks-url]: https://github.com/white-van/discussion-board/network/members
[stars-shield]: https://img.shields.io/github/stars/white-van/discussion-board
[stars-url]: https://github.com/white-van/discussion-board/stargazers
[issues-shield]: https://img.shields.io/github/issues/white-van/discussion-board
[issues-url]: https://github.com/white-van/discussion-board/issues
[license-shield]: https://img.shields.io/github/license/white-van/discussion-board
[license-url]: https://github.com/white-van/discussion-board/blob/master/LICENSE
