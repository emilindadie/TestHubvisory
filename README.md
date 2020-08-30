# FlickHouse

FlickHouse se veut l’application incontournable de tous les fans de cinéma.
L’objectif à long terme est clair : rassembler une grande base d’utilisateurs via des
quizz et tests de connaissances ainsi qu’un aspect communautaire pour
finalement réussir à leur proposer des services liés au cinéma via l’application
(tickets ciné à prix réduits, VOD, etc...


# Install dependances

```bash
$ npm install
```

# Configuration

```bash
add api key in environment folder :  /scr/environments (.ts and prod.ts)

export const environment = {
  production: false,
  apiBaseUrl: 'https://api.themoviedb.org/3',
  api_key: 'your_api_ki'
};
```


# Run app

```bash
$ npm run start
```

# Run e2e and cucumber tests
```sh
$ npm run e2e
```

# Run tests
```sh
$ npm run test  
```

# Run tests with coverage
```sh
$ npm run test:cov
```
