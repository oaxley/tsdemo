#!/bin/bash

PROJECT=$1

# create the directories
pushd .. >/dev/null 2>&1
mkdir $PROJECT

pushd $PROJECT >/dev/null 2>&1
mkdir -p demo/public/{images,javascripts,stylesheets} demo/routes demo/styles demo/views files/src

# copy the files
popd >/dev/null 2>&1
popd >/dev/null 2>&1
cp tsconfig.json ../${PROJECT}/files

PROJECT_LC=$(echo ${PROJECT} | tr "[A-Z]" "[a-z]")

# install all the files
sed -e 's/##_project_##/'${PROJECT_LC}'/' webpack.config.js > ../${PROJECT}/files/webpack.config.js
sed -e 's/##_project_##/'${PROJECT_LC}'/' index.pug > ../${PROJECT}/demo/views/${PROJECT_LC}.pug
sed -e 's/##_project_##/'${PROJECT_LC}'/' index.js > ../${PROJECT}/demo/routes/index.js
sed -e 's/##_project_##/'${PROJECT_LC}'/' style.less > ../${PROJECT}/demo/styles/${PROJECT_LC}.less

