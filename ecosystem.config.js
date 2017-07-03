module.exports = {
  apps: [{
    name: 'eventurize',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-39-196-157.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/eventurize-key-pair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:illia-to/web-app.git',
      path: '~/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
