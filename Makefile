build :
	docker-compose up --build

run :
	docker-compose up

down :
	docker-compose down --remove-orphans

prettier :
	cd frontend && npx prettier --write .
	cd frontend && npm run lint -- --fix