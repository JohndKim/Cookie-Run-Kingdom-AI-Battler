django:
	bash -c "python3 manage.py runserver"

react:
	bash -c "cd frontend && npm run build"

cookierun:
	make react
	make django