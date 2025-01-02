bun install --save-text-lockfile
bun run build

cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
cp bun.lock .next/standalone/bun.lock

API_KEY=Bz9qR5xCMCjX1vUaMUoeiz-2kT2YHGvC81o5ybES5t7ob581eqL68HZyAgEvL115k7u bun run deploy/deploy.ts
