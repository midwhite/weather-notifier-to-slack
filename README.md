## get started

```
$ yarn install
$ yarn clasp create {project-name} --rootDir {rootdir}
$ cp src/setSecretValues.ts-sample src/setSecretValues.ts
```

- Then set OPEN_WEATHER_MAP_API_KEY and SLACK_INCOMING_WEBHOOK_URL in src/setSecretValues.ts

## deploy

```
$ yarn clasp:push
```
