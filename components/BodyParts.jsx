import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { bodyParts } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

export default function BodyParts() {
    const router = useRouter();
    return (
        <View className="mx-4">
            <Text style={{ fontSize: hp(3) }} className='font-semibold text-neutral-700'>
                Exercises
            </Text>

            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <BodyPartsCard index={index} router={router} item={item} />}

            />
        </View>
    )
}

const BodyPartsCard = ({ index, router, item }) => {
    console.log('body part item card ' + item);
    return (
        <View key={index}>
            <TouchableOpacity
                onPress={()=> router.push({pathname: '/exercises', params: item})}
                style={{ width: wp(44), height: wp(52) }}
                className='flex justify-end p-4 mb-4'>
                <Image
                    source={item.image}
                    className='rounded-[35px] absolute'
                    resizeMode='cover'
                    style={{ width: wp(44), height: wp(52) }}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(44), height: hp(15) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className='absolute bottom-0 rounded-b-[35px]'
                />
                <Text style={{fontSize: hp(2.3)}}
                className='text-white font-semibold text-center tracking-wide'
                >{item?.name}</Text>
            </TouchableOpacity>
        </View>
    )
}