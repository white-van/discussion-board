build :
	docker-compose up --build

prettier :
	cd frontend && npx prettier --write .