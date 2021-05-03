# Usage:
# 
#       Build image:
#       docker build . -t naticampi/angularapp
# 
#       Run image
#       sudo docker run -p 4200:80 naticampi/angularapp

FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/alergias-website/ /usr/share/nginx/html

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
