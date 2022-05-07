import { AWSResponse } from './models/awsResponse.interface';
import * as AWS from 'aws-sdk';
import env from '@config/env';
import { InternalServerErrorException } from '@nestjs/common';
import path from 'path'

export class S3Provider {
  public async uploadS3(
    file: Buffer,
    name: string,
    bucket: string,
    folder: string,
    key: string,
  ): Promise<string> {
    const s3 = new AWS.S3({
        accessKeyId: env().s3Credentials.accessKeyId,
        secretAccessKey: env().s3Credentials.secretAccessKey,
    });

    name = `${Math.random()}-${name}`;

    const params = {
      Bucket: bucket,
      Key: `${folder}/${key}-${name}`,
      Body: Buffer.from(file),
      ACL: 'public-read',
      Tagging: null
    };

    s3.upload(params, (err: Error) => {
      if (err) {
        throw new InternalServerErrorException(err, err.message);
      }
    });

    const url = s3.getSignedUrl('getObject', {
      Bucket: bucket,
      Key: `${folder}/${key}-${name}`,
      Expires: 60 * 5,
    });

    return url;
  }

  public async uploadManyFiles(
    files: Array<Express.Multer.File>,
    bucket: string,
    key: string,
  ): Promise<AWSResponse[]> {
    const filesUpload = [];
    await Promise.all(
      files.map(async (file) => {
        const { originalname, buffer,  } = file;
        const upload = await this.uploadS3(buffer, originalname, bucket, 'files', key);
        const url = upload.split('?')[0]
        if (upload) filesUpload.push(url);
      }),
    );
    return filesUpload as AWSResponse[];
  }
}
