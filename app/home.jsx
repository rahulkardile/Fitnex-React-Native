import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImageSlider from '../components/ImageSlider'
import BodyParts from '../components/BodyParts'
import { router } from 'expo-router'

export default function home() {
    const item = [
        {
            name: 'back',
            image: require('../assets/images/back.png')

        }
    ]
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style='dark' />
            <View className='flex-row justify-between items-center mx-5'>
                <View className='space-y-2' >
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-neutral-700'
                    >Ready To</Text>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-rose-700'
                    >WORKOUT</Text>
                </View>
                <View className='flex justify-center items-center space-y-2'>
                    <Image
                        style={{ height: hp(8), width: hp(8) }}
                        source={require('../assets/images/avatar.jpg')}
                        className="rounded-full" />
                    <View
                        style={{ height: hp(5.5), width: hp(5.5) }}
                        className='bg-neutral-200 rounded-full flex justify-center items-center border-[2px] border-neutral-300'>
                        <Ionicons name="notifications" size={hp(4)} color="grey" />
                    </View>
                </View>
            </View>

            {/* Image Slider */}
            <View>
                <TouchableOpacity
                    onPress={() => router.push({ pathname: '/exercises', params: item })}
                >
                    <ImageSlider />
                </TouchableOpacity>
            </View>

            {/*  Body Parts  */}
            <View className='flex-1'>
                <BodyParts />
            </View>
        </SafeAreaView>
    )
}