build:
ifeq ($(env), local)
	cd frontend && npm install
else
	docker-compose up --build
endif

run:
ifeq ($(env), local)
	cd frontend && npm run dev
else
	docker-compose up
endif

test:
	cd frontend && npm run test

down:
	docker-compose down --remove-orphans

prettier:
	cd frontend && npx prettier --write .
	cd frontend && npm run lint -- --fix
