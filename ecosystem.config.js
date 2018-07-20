module.exports = {
  apps : [{
    name      : 'blog-express',
    script    : './dist/bin/www',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'blog',
      host : '47.92.23.193',
      ref  : 'origin/master',
      repo : 'git@github.com:blog-express.git',
      path : '/home/devblog',
      'post-deploy' : 'yarn add && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
