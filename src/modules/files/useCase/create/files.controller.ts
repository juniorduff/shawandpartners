import {
  Controller,
  Get, HttpCode,
  Post,
  Req,
  Res,
  UploadedFile
} from "routing-controllers";
const csv = require('csv-parser');
import * as stream from 'stream';
import { Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ICreateUserService } from '../../../user/interface/user.interface';
import { IUserCsvDTO } from '../../dto/file.dto';

@Controller('/api')
@injectable()
export class FilesController {
  constructor(
    @inject('ICreateUserService') private userService: ICreateUserService
  ) {}

  @Post('/files')
  @HttpCode(200)
  async uploadCsv(
    @Res() res: Response,
    @UploadedFile('file') file: Express.Multer.File
  ) {
      console.log(this.userService);
      const results = await readCSVFile(file.buffer);
      return this.userService.create(results);

  }
}
function readCSVFile(csvBuffer: Buffer): Promise<IUserCsvDTO[]> {
  return new Promise((resolve, reject) => {
    const results: any[] = [];

    const readableStream = new stream.Readable({
      read() {
        this.push(csvBuffer);
        this.push(null);
      },
    });

    readableStream
      .pipe(csv())
      .on('data', (data: any) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error: Error) => {
        reject(error);
      });
  });
}
