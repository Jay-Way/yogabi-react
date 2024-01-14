# Yogabi.eu
Simple static website with next-js and next-ui. Deployment and infrastructure provisioning via serverless framework. Served via Cloudfront & S3

### Install dependencies

```bash
npm install
serverless plugin install -n serverless-s3-sync
```

### Configure serverless AWS credentials

```bash
serverless config credentials --provider aws --key XXX --secret XXX --profile XXX
```

### Run the development server

```bash
npm run dev
# Or using Docker (without local node installation)
docker compose up -d
```

### Deploy

```bash
npm run build
# Deploy infrastructure changes
serverless deploy --aws-profile {AWS_PROFILE_NAME}
# Or push build to s3 only
serverless s3sync --aws-profile private-home

```
