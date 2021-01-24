module.exports = {
  apps : [{
    name      : 'blog-express',
    script    : './dist/bin/www',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'dev'
    }
  }],

  deploy : {
    dev : {
      user : 'blog',
      host : '47.92.23.193',
      ref  : 'origin/master',
      repo : 'git@github.com:huyong007/blog-express.git',
      path : '/home/blog/devblog',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
