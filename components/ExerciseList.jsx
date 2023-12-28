import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React from 'react'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { demoExercises } from '../constants';

export default function ExerciseList({ data }) {
    const router = useRouter();
    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 55, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}
            />

        </View>
    )
}

const ExerciseCard = ({ item, router, index }) => {
    return (
        <View>
            <TouchableOpacity 
        className="flex py-3 space-y-2"
        onPress={() => router.push({pathname: '/exerciseDetail', params: item})}
        >
                <View className='bg-neutral-200 shadow rounded-[25px]'>
                    <Image
                       source={item.gifUrl}
                       className='rounded-[35px]'
                       contentFit='cover'
                       style={{ width: wp(45), height: wp(58) }}
                    />
                    <Text 
                    style={{fontSize: hp(1.7)}}
                    className='text-neutral-700 font-semibold pr-2 tracking-widest'>
                        {item.name.length > 13 ? `${item.name.substring(0, 19)} . . .` : item.name}
                        </Text>
                </View>


            </TouchableOpacity>
        </View>
    )
}