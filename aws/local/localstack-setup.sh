#!/bin/bash

# Bash constants
GREEN_COLOR='\033[0;32m'
BLUE_COLOR='\033[0;34m'

# AWS environment
AWS_REGION=us-east-1
AWS_ID=000000000000
AWS_PROFILE=final-job-puc-localstack


# Build AWS S3 infraestructure
function createS3 {
 aws --endpoint-url=http://localhost:4566 s3api create-bucket --bucket final-job-puc
 aws --endpoint-url=http://localhost:4566 s3api put-object --bucket final-job-puc --key files/
 aws --endpoint-url=http://localhost:4566 s3api put-bucket-acl --bucket final-job-puc --acl public-read
}

echo -e "\n${BLUE_COLOR} Running. \n"

{
  createS3
}
echo -e "\n${BLUE_COLOR}End of the script. \n"
