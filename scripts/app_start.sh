#!/bin/bash
sudo chmod -R 777 /home/ubuntu/nodejs-express

# Navigate into our working directory where we have all our github files
cd /home/ubuntu/nodejs-express

# add nom and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # loads nvm bash_completion (node is in)

# install node modules
npm install
pm2 start npm --name "myApp"

# start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null &
