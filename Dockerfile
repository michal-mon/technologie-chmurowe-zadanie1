FROM node:alpine
ADD src /app
WORKDIR /app
ENV PORT=3000
LABEL AUTOR="Michal Mon"
RUN npm install \
    && apk add nodejs
EXPOSE ${PORT}
ENTRYPOINT [ "node", "index.js" ]