import { View, Text, type ImageSourcePropType } from 'react-native';
import {Tabs, Redirect} from 'expo-router';
import { Image } from 'react-native';
import { icons } from '../../constants';

interface ITabIconProps {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean
}

const TabIcon: React.FC<ITabIconProps>  = ({
    icon,
    color,
    name,
    focused
}) => {
    return(
        <View className=' items-center justify-center gap-1'>
            <Image
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className='w-6 h-6'
            />
            <Text
            style={{color:color}}
            className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`}
            >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffa001",
        tabBarInactiveTintColor: "#cdcde0",
        tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#2325333",
            height: 84
        }
    }}
    >
        <Tabs.Screen
        name="home"
        options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen
        name="bookmark"
        options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen
        name="create"
        options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                icon={icons.plus}
                color={color}
                name="create"
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen
        name="profile"
        options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
                />
            )
        }}
        />

    </Tabs>
    </>
  )
}

export default TabsLayout