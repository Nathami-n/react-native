import {Account, Avatars, Client, Databases, ID} from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.Nate.Mine',
    projectId: "66379fb3000aeb61fe23",
    databaseId: "6637bd21002a109c8889",
    userCollectionId: "6637bd61001840a2b621",
    videoCollectionId: "6637bdcc0029da3e3cb0",
    storageId: "6637bfb5000c3e08c267"
};




const client = new Client();

client
.setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

 export const createUser =  async ( email: string, password: string, username:string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        
        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);


        const newUser =  await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );

        return newUser;

    } catch (e: Error) {
        console.log(e);
        throw new Error(e.message);
    }
 }


 export const signIn = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch(error: Error) {
        throw new Error( error.message);
    }
 }
