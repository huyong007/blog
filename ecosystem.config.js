module.exports = {
  apps: [{
    name: 'blog-express',
    script: './dist/bin/www',
    watch:true,
    env: {
      NODE_ENV: "dev",
    },
  }],

  deploy: {
    dev: {
      user: 'blog',
      host: '47.92.23.193',
      port: "22",
      ref: 'origin/master',
      repo: 'git@github.com:huyong007/blog-express.git',
      path: '/home/blog/devblog',
      ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev',

      }
    }

  }
};
