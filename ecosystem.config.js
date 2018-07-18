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
      host: '154.8.171.134',
      port: "22",
      ref: 'origin/master',
      repo: 'github.com:huyong007/blog-express.git',
      path: '/www/website/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'dev'

      }
    }

  }
};
