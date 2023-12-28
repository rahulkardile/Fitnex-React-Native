import { StatusBar, TouchableOpacity, View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { } from 'react-native-gesture-handler';
import { BodyPartData } from '../api/Exercise.js';
import { demoExercises } from '../constants';
import Entypo from 'react-native-vector-icons/Entypo'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ExerciseList from '../components/ExerciseList';
import { indivisualImage } from '../constants';
import { ScrollView } from 'react-native-virtualized-view';

export default function exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    if (item) getExercises(item.name)
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await BodyPartData(bodypart);
    setExerciseData(data || demoExercises)
  }
  return (
    <ScrollView>
      <StatusBar style='light' />
      <Image
        source={item.image || indivisualImage}
        style={{ width: wp(100), height: hp(45) }}
        className="mt-7 rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-gray-700 mx-7 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(7.5), width: hp(7.5), marginTop: hp(7) }}
      >
        <Entypo name="back" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises */}
      <View className='mx-3 space-y-3 mt-4' >
        <Text style={{ fontSize: hp(3) }} className='font-semibold capitalize text-neutral-800'>
          {item.name} Exercises
        </Text>
        <View className='mt-9'>
          <ExerciseList data={exerciseData} />
        </View>
      </View>
    </ScrollView>
  )
}