  <h1 align="center">
    <img alt="Time Capsule" title="Time Capsule" src="./web/src/assets/nlw-spacetime-logo.svg" />
</h1>
<h2 align="center"> 
	Time Capsule | Status: Finished y receiving updates
</h2>
<p align="center">🚀 Memory recall application. Keep important moments always with you.</p>


---



<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-execute">How execute</a> • 
 <a href="#technologies">Technologies</a> •  
 <a href="#author">Author</a> • 
 <a href="#license">License</a>
</p>

<p align="center">
 <a href="./README-pt.md">🇧🇷 Portuguese</a> •
 <a href="./README-es.md">🇨🇴 Spanish </a> •
 <a href="./README.md">🇺🇸 English</a>
</p>

---


## About

Application that allows you to have close important moments. Add an image or video. and comment why that memory has meant so much to you



## Features

- [x] Login with Github
- [x] Allow to load images or videos like memories
- [x] Every memory can be a text description
- [x] Memories can be publics or privates
- [x] Layout web and mobile



## Layout

O layout da aplicação está disponível no Figma:



## How Execute

### Clone Time Capsule repository

```bash
$ git clone https://github.com/ConsulIam/time-capsule.git
```

### Install server dependencies

```bash
$ cd time-capsule/server
$ npm install
```

### Create database

```bash
$ cp .env.example .env
$ npx prisma migrate reset -f
```

### Update .env file with app credentials from Github

For every environment (web and mobile) is necessary to create a _New OAuth app_ on Github. Please follow the route [Github.com > Settings > Developer settings > OAuth Apps > New OAuth app](https://github.com/settings/apps)

#### Web
- Application name
> Time Capsule (DEV)

- Homepage URL 
> http://localhost:3000/

- Authorization callback URL
> http://localhost:3000/api/auth/callback

#### Mobile
- Application name
> Time Capsule (DEV MOBILE)

- Homepage URL 
> http://localhost:3000/

- Authorization callback URL
> exp://127.0.0.1:19000 (change the IP address for you IP local address)

**Note:** Please remember to remove the _#_ into _.env_ file when you are going to use the web or mobile environment.

### Execute server

```bash
$ npm run dev
```

### Install web dependencies

```bash
$ cd time-capsule/web
$ npm install
```

### Configure .env.local file

```bash
$ cp .env.local.example .env.local
```

### Update .env file with app credentials from Github

Please use the CLIENT_ID created previously for web environment

### Update your IP local address into [next.config.js](./web/next.config.js) and [api.ts](./web/src/lib/api.ts) files.

### Execute web

```bash
$ npm run dev
```

---

## Technologies

Updating

---

## Author

<p align="center">
<a href="https://bc.consuliam.com">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/25617605?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>🤖 Iván Lasso ⚙️</b></sub></a> <a href="https://bc.consuliam.com" title="ConsulIAm"></a>
 <br />
 </p>

---

## License

This project is licensed under [MIT](./LICENSE).

---

## README versions

<p align="center">
 <a href="./README-pt.md">🇧🇷 Portuguese</a> •
 <a href="./README-es.md">🇨🇴 Spanish </a> •
 <a href="./README.md">🇺🇸 English</a>
</p>