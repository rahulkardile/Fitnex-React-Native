import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import Animated ,{ FadeIn, FadeOut } from 'react-native-reanimated'
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 -space-y-8'
      >
        <Animated.View entering={FadeIn.delay(1500).springify()} className='flex items-center pb-5'>
          <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>Best <Text className='text-rose-600'>Workouts</Text></Text>
          <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>For You </Text>
        </Animated.View>

        <Animated.View entering={FadeIn.delay(2500).springify()}>
          <TouchableOpacity
          onPress={()=> router.push('home')}
          style={{height: hp(7), width:wp(80)}}
          className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[1.5px] border-neutral-100'
          >
            <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">Get Started</Text>
            
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  )
}