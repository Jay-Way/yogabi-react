# Yogabi.eu

Simple website with next-js and next-ui. Despite using next-js this app only generates static output.

- Containerized with Docker.
- Deployment and infrastructure provisioning via serverless framework.
- Served via Cloudfront & S3.

Mostly a learner project serving a very simple website, with more attention to the dev/deployment/infra than the actual react app.
Maybe useful as a template for someone.

### Install dependencies and configure AWS credentials

1. Install Docker
2. Create an AWS account
3. Create an IAM user with the AdministratorAccess Role and get the credentials
4. Create a Route53 and DNS record in AWS if you want to use https (There might be additional configuration needed if you don't)
5. Create an .env file at the root dir, fill in APP_NAME (will be used to name Docker container and service on AWS) and AWS_PROFILE_NAME (will be stored locally)

```bash
APP_NAME=your-app-name
AWS_PROFILE_NAME=your-aws-profile-name
# Fill in the cloudfront distribution id after the first deployment
CLOUDFRONT_DISTRIBUTION_ID=your-cloudfront-distribution-id
```

### Run the development container

```bash
docker compose up -d
# --build if something changes in the Dockerfile
docker compose exec YOUR_APP_NAME sh

# Configure serverless with the credentials from above, this will add them to ~/.aws/credentials (You might need to create this file)
# Add your AWS credentials for --key and --secret
serverless config credentials --provider aws --key XXX --secret XXX --profile $AWS_PROFILE_NAME
```

### Deploy

```bash
# You might need to rebuild your container after setting all .env vars to load them into the container
# Enter container
docker compose exec $APP_NAME sh
# Build static output
npm run build
# Deploy infrastructure changes (on first deployment and then if needed)
serverless deploy --aws-profile $AWS_PROFILE_NAME
# Or push build files to s3 only
serverless s3sync --aws-profile $AWS_PROFILE_NAME
# List your deployed cloudfront distribution
aws cloudfront list-distributions --profile $AWS_PROFILE_NAME
# Create invalidation via aws cli with the cloudfront distribution id from above
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --invalidation-batch '{"Paths": {"Quantity": 1,"Items": ["/*"]}, "CallerReference": "cli"}' --profile $AWS_PROFILE_NAME
```

### TODOs

- Translation via i118 etc
- Deploy script
