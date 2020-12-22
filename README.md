# discussion-board

## Project Structure
```text
.
├── backend                   # WIP
├── frontend                  
│   ├── content
│   │   └── locale            # Contains language files
│   ├── network               # helpers for making http requests via axios
│   ├── pages                 
│   │   ├── api               
│   │   ├── home
│   │   ├── _app.tsx          # providers/wrappers for app
│   │   └── index.tsx         # content for root page
│   ├── stores                
│   ├── stories      
│   └── styles
└── README.md                 # You are here! :)
```   

## Contributing

discussion-board follows Gitflow

1. Fork the repo
2. Make a branch in your fork, named DEV-XXX (where XXX corresponds to the issue number)
3. Write your code
4. Open a PR from that branch to master (in the main repo)
5. Fill out the pull request template accordingly
6. If working on frontend: run `make prettier`
7. To be approved, code must have adequate test coverage + formatted properly

## Local Development

1. Download Docker
2. `cd frontend && npm install`
3. `make run`
