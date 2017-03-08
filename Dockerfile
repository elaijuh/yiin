FROM elaijuh/node:latest
ENV PROJECT_NAME fiin 
MAINTAINER hjl <hjiale@gmail.com> 

RUN mkdir /fiin
WORKDIR /fiin


COPY package.json yarn.lock /fiin/
RUN yarn --ignore-optional && yarn cache clean
EXPOSE 3000

COPY . /fiin

CMD sleep 3s && yarn run serve:prod 
