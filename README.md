# GoLinks (in NodeJS)

A small NodeJS app that provide golinks type functionality locally by redirecting 
configurable URL paths (ie. go/home) to an well-known domain resource (ie. https://zurn.dev/home).

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

See the associated [blog post section](https://zurn.dev/blog/post/golinks/#taking-it-one-step-further) on setting up PM2.

See https://stackoverflow.com/questions/60699738/how-to-start-node-js-server-on-each-system-boot-in-mac-and-windows for more details.

