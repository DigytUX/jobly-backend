# Use the official Node.js 14 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Install Prisma globally
RUN npm install -g prisma

# Generate Prisma client
RUN npx prisma generate

# Build the NestJS application
RUN npm run build

# Expose the port on which the application will run
# Expose the port on which the application will run
EXPOSE 3000

# Set the environment variables for the Prisma connection and port
ENV DATABASE_URL="postgresql://postgres:lNiMwWazYVb6aM5t7Zrv@containers-us-west-150.railway.app:5772/railway"
ENV PORT=3000

# Run the NestJS application
CMD [ "node", "dist/main" ]
