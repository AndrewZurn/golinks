# GoLinks (in NodeJS)

A small NodeJS app that provide golinks type functionality locally by redirecting 
configurable URL paths to a Fully Qualified Domain Name (FQDN).

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```sh
git clone https://github.com/AndrewZurn/golinks-nodejs.git
cd golinks-nodejs
```

2. Install the dependencies:
```sh
npm install
```

## Configuration

The URL paths and their corresponding FQDNs are configured in the `golinks.json` file. This file
can be dynamically updated (not requiring a restart of the server for changes to the config to 
take affect and be used by your browser when opening new/updated GoLinks).

Example:
```json
{
  "/path1": "https://example1.com",
  "/path2": "https://example2.com",
  "/path3": "https://example3.com",
  "/path4/subpath1": "https://example4.com"
}
```

Simply update this file to specify the path (key) you would like to have the server redirect your
browser to when you enter "go/(key)" into your browser bar.

## Usage

To start the server, run:
```sh
npm start
```

The server will start on port `80`. You can change the port by modifying the `port` variable in `golinks.js`.
You'll also need to update your `/etc/hosts` file (instructions below) to complete the setup. Finally,
if you would like this application to run at startup, there is a section below to help enable that as well.

## Updating /etc/hosts to Redirect to Node App
In order to get the app functioning in your local environment, we need to update `/etc/hosts`
so that any `go/path/to/app` URL that is opened is properly redirected to this Node app.

Update `/etc/hosts`
```
sudo vim /etc/hosts
```

Add the following line to the bottom of the file:
```
127.0.0.1 go
```

## Starting the Golinks Node App at Startup
We can start the app using `pm2` (Process Manager for Node Apps) at startup time to ensure
that the app will be up and running anytime we reboot.

Install pm2 (https://pm2.keymetrics.io/docs/usage/startup/):
```
npm i -g pm2
```

Setup your app to run:
```
pm2 start golinks.js
```

Enable pm2 to run at startup (following the output prompt to run an additional command
to ensure it registers with your systems launch controller):
```
pm2 startup
```

And finally save the current apps pm2 is managing (so it restarts them after a reboot):
```
pm2 save
```

To restart your apps, you can use the following command:
```
pm2 restart golinks
```

See https://stackoverflow.com/questions/60699738/how-to-start-node-js-server-on-each-system-boot-in-mac-and-windows for more details.

