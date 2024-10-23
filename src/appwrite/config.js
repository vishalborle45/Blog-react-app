import conf from "../conf/conf";

import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appWriteurl).setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async getPost(){
      
  }
}


const service  = new Service()

export default service
