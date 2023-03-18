import React from 'react'
import { useState } from 'react'
import { View,SafeAreaView,FlatList,Text } from 'react-native'
import { HomeHeader,FocusesStatusBar,NFTCard } from '../components'


const Home = () => {
  return (
    <SafeAreaView  style={{flex:1}}>
      <HomeHeader></HomeHeader>
    </SafeAreaView>
  )
}

export default Home 