FROM postgres:latest

ENV POSTGRES_USER postgres

ENV POSTGRES_PASSWORD postgres

ENV POSTGRES_DB meubd

ENV POSTGRES_HOST postgres

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
