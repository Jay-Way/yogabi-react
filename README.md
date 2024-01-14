# Yogabi.eu

Simple website with next-js and next-ui. Despite using next-js this app only generates static output.

- Containerized with Docker.
- Deployment and infrastructure provisioning via serverless framework.
- Served via Cloudfront & S3.

Mostly a learner project serving a very simple website. Maybe useful as a template for someone.

### Install dependencies and configure AWS credentials

1. Install Docker
2. Create an AWS account
3. Create an IAM user with the AdministratorAccess Role and get the credentials
4. Create a Route53 and DNS record in AWS if you want to use https (There might be additional configuration needed if you don't)


### Run the development container

```bash
docker compose up -d
# docker compose up -d --build if something changes in the Dockerfile
# Or use npm run dev if you don't want to use Docker, you need serverless installed and install serverless-plugins manually

# Configure serverless with the credentials from above, this will add them to ~/.aws/credentials (You might need to create this file)
# Add a name for --profile and your credentials for --key and --secret
serverless config credentials --provider aws --key XXX --secret XXX --profile XXX
```

### Deploy

```bash
# Enter container
docker compose exec yogabi sh
# Build static output
npm run build
# Deploy infrastructure changes (on first deployment and then if needed)
serverless deploy --aws-profile {YOUR_AWS_PROFILE_NAME}
# Or push build to s3 only
serverless s3sync --aws-profile {YOUR_AWS_PROFILE_NAME}
# Create invalidation via aws cli
aws cloudfront create-invalidation --distribution-id {YOUR_CLOUDFRONT_DISTRIBUTION_ID} --invalidation-batch '{"Paths": {"Quantity": 1,"Items": ["/*"]}, "CallerReference": "cli"}' --profile {YOUR_AWS_PROFILE_NAME}
```

### TODOs

- Translation via i118 etc
- Configurable vars via .env
- Deploy script
