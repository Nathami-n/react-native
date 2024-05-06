import { View, Text, FlatList , Image, RefreshControl, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { getAllPosts } from '../../lib/appwrite';
import { Models } from 'react-native-appwrite';

const Home = () => {
  const [data, setData] = useState<Models.Document[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    const fetchData = async () => {
      setIsLoading(true);
      try {
        
        const response = await getAllPosts();
        setData(response);
      } catch (error) {
        Alert.alert("error", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    //recall videos
    
    setRefreshing(false);
  }
  return (
    <SafeAreaView className='bg-primary h-full px-3'>
      <FlatList
      data={[{id:'hello'}]}
      keyExtractor={( item)=> item.id }
      renderItem={({item}) => (
        <Text className='text-white text-3xl'>{item.id}</Text>
      )}
      ListHeaderComponent={()=> (
        <View className='my-6 py-4 space-y-6'>
          <View className='justify-between items-start flex-row mb-6'>
            <View>
              <Text className='font-pmedium text-sm text-gray-100'>
                Welcome Back
              </Text>
              <Text className='text-2xl font-psemibold text-white'>
                Nathan
              </Text>
            </View>
            {/* image */}

            <View className='mt-1.5'>
            <Image 
            source={images.logoSmall}
            className='w-9 h-9'
            resizeMode='contain'
            />
            </View>
          </View>

          {/* search component */}
          <SearchInput
          placeholder='Search for a video topic'
          />

          <View className='w-full flex-1 pt-5 pb-2 '>
          <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest Videos</Text>
          <Trending
          posts={[
            {id:1},
            {id:2},
            {id:3},
          ] ?? []}
          />
          </View>
        </View>
      )}

      ListEmptyComponent={()=> (
        <EmptyState 
        title = "No videos found"
        subtitle="No videos created yet"
        />
      )}

      refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}
      />
    </SafeAreaView>
  )
}

export default Home