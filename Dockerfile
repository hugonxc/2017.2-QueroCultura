FROM python:3

ENV PYTHONUNBUFFERED 1

# Faz a instalação das dependencias node para o gulp
RUN apt-get update && \
    curl -sL https://deb.nodesource.com/setup_8.x  && \
    apt-get install -y nodejs && \
    apt-get install -y npm

RUN mkdir /code

WORKDIR /code

ADD requirements.txt /code/

RUN pip install -r requirements.txt

ADD . /code/

RUN npm install -g
RUN ln -s /usr/bin/nodejs /usr/bin/node
