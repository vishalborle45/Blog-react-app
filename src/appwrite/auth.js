import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client()
    account ; 
    constructor(){
        this.client.setEndpoint(conf.appWriteurl).setEndpoint(conf.appWriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email , password, name}){
        try {

            const userAccount = await this.account.create(ID.unique(), email , password, name)
            if(userAccount){
                return this.Login({email, password})

            }else{
                return userAccount
            }
        } catch (error) {
            console.log(error)
            throw error
            
            
        }


    }

    async Login(){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log(error)
            throw error
        }

    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("appWrite service :: getCurrentUsere() :: ", error)
            throw error
        }
    }
    async Logout(){
        try {

            return await this.account.deleteSession()
            
        } catch (error) {
            console.log("appWrite service :: Logout() :: ", error)
            throw error
            
        }
    }
}

const authService = new AuthService()

export default authService