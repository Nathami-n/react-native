import {Client} from 'react-native-appwrite';
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

