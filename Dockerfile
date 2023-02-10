# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the app dependencies using Yarn
RUN yarn install

# Copy the rest of the app files to the container
COPY . .

ARG REACT_APP_BASE_URL 
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

# Build the ReactJS app
RUN yarn build

# Use an official Nginx image as the base image
FROM nginx:1.19

# Copy the build output from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
