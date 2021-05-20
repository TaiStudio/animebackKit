#!/usr/bin/env bash

set -v            # print commands before execution, but don't expand env vars in output
set -o errexit    # always exit on error
set -o pipefail   # honor exit codes when piping
set -o nounset    # fail on unset variables

git clone "https://AnimeBack-Bot:$GH_TOKEN@github.com/TaiStudio/animebackKit" animebackKit
cd animebackKit
npm ci

npm run updater

# bail if nothing changed
if [ "$(git status --porcelain)" = "" ]; then
  echo "no new content found; goodbye!"
  exit
fi

git config user.email animebot.tai.studio@outlook.fr
git config user.name AnimeBack-Bot
git add .
git commit -am "new version" --author "AnimeBack-Bot <animebot.tai.studio@outlook.fr>"
npm version minor -m "bump minor to %s"
git pull --rebase
git push origin main
git push origin main --tags
echo //registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN} > .npmrc
npm publish
npm pack
echo //npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN} > .npmrc
npm publish
npm pack
node ./script/publish-to-gh.js
