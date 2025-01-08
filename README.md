# Auth0 Pushed Authorization Requests (PAR) Demo Application

This is a sample applications that will leverage Auth0's PAR endpoint during the authorization code flow process.

## Disclaimer :warning:
---
This project serves as a Sample Demo, that you can tweak or completely re-purpose.

## Assumptions

## Prerequisties

* Auth0 Tenant - If you do not already an Auth0 tenant, you can register for a free [Auth0 Free Plan](https://auth0.com/signup)
* Enable PAR on your Auth0 Tenant [How-to](https://auth0.com/docs/get-started/applications/configure-par)
* Create an Regular Web App. [How-to](https://auth0.com/docs/get-started/auth0-overview/create-applications/regular-web-apps)
* Node v20.15.0+
* npm v10.9.1+

### Demo Setup Steps

### Installation and Configuration
1. Clone the repo
```bash 
git clone https://github.com/intheorysecurity/auth0-par-demo
```

2. Install NodeJS dependencies based on the package.json.
```bash
npm install
```

3. Copy the contents of the .env.exmaple file,

```bash
#Windows
copy .env.example .env

#Linux
cp .env.example .env
```

## Contributing
---
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
---
[MIT](https://choosealicense.com/licenses/mit/)