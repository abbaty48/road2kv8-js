# Using node base image
FROM node
# Change working directory to /app
WORKDIR /app
# copy all src to app
# copy the entrypoint 
COPY ./package.json ./package-*.json /app/
COPY ./src/ /app/src
COPY ./conf/entrypoint.sh /app
# install all app dependencies
RUN npm install
# make it executable
RUN chmod +x /app/entrypoint.sh
# run the entrypoint
CMD ["/app/entrypoint.sh"]


