# Use the official Node.js image with Alpine
FROM node:18.12.1-alpine

# Install bash, curl, and yarn
RUN apk add --no-cache bash curl yarn

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose the port your application will run on
#EXPOSE 3000

# Command to run the application
CMD ["yarn", "serve"]
