import env from '@/app/env'
// connecting the frontend to the backend

import {Client, Account, Avatars, Databases, Storage} from 'appwrite'

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)

const databases = new Databases(client)
const account = new Account(client)
const avatars = new Avatars(client)
const storage = new Storage(client)

export {client, databases, storage, account, avatars}