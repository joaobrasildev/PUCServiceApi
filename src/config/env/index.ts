export default () => ({
  application: {
    port: process.env.PORT || 3000,
    host: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    environment: process.env.NODE_ENV || 'production',
  },
  s3Credentials: {
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    bucket: process.env.AWS_S3_BUCKET,
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_S3_ENDPOINT,
  },
});
