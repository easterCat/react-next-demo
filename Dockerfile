FROM node:10.16.3

RUN mkdir -p /ptg/web

# make the 'app' folder the current working directory
WORKDIR /ptg/web

COPY package*.json ./

# install project dependencies
RUN npm install --no-optional

RUN npm install -g cross-env

RUN npm install -g pm2

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /ptg/web

RUN npm run build

EXPOSE 6776

CMD npm run dev