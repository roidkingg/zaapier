module.exports = {
    apps: [
      {
        name: "frontend",
        cwd: "./frontend",
        script: "node_modules/.bin/next",
        args: "start",
        env: {
          NODE_ENV: "production",
          PORT: 3000
        }
      },
      {
        name: "primary-backend",
        cwd: "./primary-backend",
        script: "npm",
        args: "run start",
        env: {
          NODE_ENV: "production"
        }
      },
      {
        name: "hooks",
        cwd: "./hooks",
        script: "npm",
        args: "run start",
        env: {
          NODE_ENV: "production"
        }
      },
      {
        name: "worker",
        cwd: "./worker",
        script: "npm",
        args: "run start",
        env: {
          NODE_ENV: "production"
        }
      },
      {
        name: "processor",
        cwd: "./processor",
        script: "npm",
        args: "run start",
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  }