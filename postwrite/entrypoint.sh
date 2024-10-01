#!/bin/bash

echo "Waiting for MySQL Post-Write Database to start..."
./wait-for-it.sh posts-write-db:3306 --strict

echo "Making Migrations..."
python manage.py makemigrations

echo "Migrating the Database..."
python manage.py migrate

echo "Starting the server..."
python manage.py runserver 0.0.0.0:8000

exec "$@"