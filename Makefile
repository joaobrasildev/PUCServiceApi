up-postgres-daemon:
	docker-compose -f docker-compose.yml up -d 
    
up-postgres:
	docker-compose -f docker-compose.yml up 

down:
	docker-compose -f docker-compose.yml down
logs:
	docker-compose -f docker-compose.yml logs 