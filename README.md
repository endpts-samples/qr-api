# QR Code Generator API

This sample demonstrates how to build an API endpoint that generates QR codes for any text you provide it.

Read the complete blog post [here](https://blog.endpts.io/building-an-api-with-typescript-aws-lambda-and-endpts)

## Local Development

> **NOTE:** Node 18.x or greater is required

To get started locally, install the dependencies and start the dev server:

```bash
npm install && npm run dev
```

With the development server running, you can call the endpoint with Curl:

```bash
curl -X POST http://localhost:3000/qr \
  -d 'QR code content here'
```

For example, to link to a website when a user scans the code, simply provide a link as the text body:

```bash
curl -X POST http://localhost:3000/qr \
  -d 'https://docs.endpts.io'
```

## Deploying to endpts.io

Deploy your project to the cloud with [endpts.io](https://dashboard.endpts.io) ([Deployment documentation](https://docs.endpts.io/core-concepts/deployments)).
