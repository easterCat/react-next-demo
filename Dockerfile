FROM node:10.16.3

WORKDIR /var/ptg/web

RUN cd /var/ptg/web \ 
  && git clone https://github.com/easterCat/react-next-blog.git \ 
  && cd /var/ptg/web/react-next-blog \ 
  && npm install --no-optional \ 
  && npm install -g cross-env \
  && npm install -g pm2 \
  && npm run build \
  && apt-get update \
  && echo y | apt-get install vim

WORKDIR /var/ptg/web/react-next-blog

EXPOSE 6776

CMD [ "pm2-runtime", "start","pm2.json"]