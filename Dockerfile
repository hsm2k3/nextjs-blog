# Use the official Node.js base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Define build arguments
ARG USERNAME=ec2-user

# Copy package.json and package-lock.json files into the working directory
COPY package.json package-lock.json ./


# Create a new user in the container
RUN useradd -m ${USERNAME}

# Install the application's dependencies
RUN npm ci

# Copy the application source code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port your application will run on
EXPOSE 3000

# Accept a development environment variable(defaults to "production")
ARG NODE_ENV=production
ENV NODE_ENV=${DOCKER_NODE_ENV}

# Start the Next.js application based on the environment
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm start; fi" ]

# Current build date and git commit
ARG BUILD_DATE=unknown
ARG GIT_COMMIT=unknown
LABEL build_date=$BUILD_DATE
LABEL git_commit=$GIT_COMMIT