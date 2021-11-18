import { Storage } from "@google-cloud/storage";
import {ReqParams} from "../dto/request";
import {service} from "./index";
import {messages, response } from "../util";

const storage = new Storage()
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET || '');

const uploadFile = async ({ file }: ReqParams) => service(async () => {
  if (!file) return response.badRequest(messages.PARAM_REQUIRED('file'))

  console.log(file)

  return response.success(messages.SUCCESSFUL)
})

const UploadService = {
  uploadFile
}

export default UploadService
