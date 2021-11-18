import { Storage } from "@google-cloud/storage";
import { ReqParams } from "../dto/request";
import { service } from "./index";
import { messages, response } from "../util";
import { format } from "util";
import { global } from "../util";

const storage = new Storage()
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET || '');


const uploadFile = async ({ file, filters }: ReqParams) => service(async () => {
  if (!file) return response.badRequest(messages.PARAM_REQUIRED('file'))

  const type = filters.type
  const allowedTypes = global.fileTypes[type] || []
  if (!allowedTypes.includes(file.mimetype)) return response.badRequest(messages.INVALID_PARAM('type'))

  const url = await uploadToGoogleCloud(type, file)
  if (!url) return response.failed(messages.CREATION_ERROR('file link'))
  return response.success(messages.SUCCESSFUL, url)
})

const uploadToGoogleCloud = async (type: string = 'image', file: Express.Multer.File) => {
  return new Promise<string | null>((resolve, reject) => {

    const blob = bucket.file(`${type}/${file.originalname}`);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', err => {
      console.error(err)
      reject(err)
    })

    blobStream.on('finish', () => {
      const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`)
      resolve(publicUrl)
    })

    blobStream.end(file.buffer)
  })
}

const UploadService = {
  uploadFile
}

export default UploadService
