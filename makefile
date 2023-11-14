dkc := "docker-compose.yaml"

up: 

	docker-compose -f ${dkc} up --build


clean:
	docker-compose -f ${dkc} kill
	docker-compose -f ${dkc} stop
	docker-compose -f ${dkc} down --rmi local --volumes
	docker-compose -f ${dkc} rm -f
	@echo "Containers Docker foram parados e deletados."