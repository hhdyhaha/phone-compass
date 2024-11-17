import {View, Text, Input} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.scss'
import {useState} from "react";

const handleCategoryItemClick = (item) => {
  Taro.navigateTo({url: `/pages/CategoryItem/index?id=${item.id}&name=${item.name}`})
}

function CategoryItem({item}) {

  return (
    <View className='category-item' onClick={() => handleCategoryItemClick(item)}>
      <Text className='category-item-text'>{item.icon}{item.name}</Text>
      <view className='arrow-right'></view>
    </View>
  )
}

// 搜索框
export const SearchBox = () => {
  return (
    <Input
      className='search-input'
      placeholder='请输入搜索内容'
    />
  )
}

function Index() {
  const [categories, setCategories] = useState([
    {id: 1, name: '基础操作', icon: '📱'},
    {id: 2, name: '安全设置', icon: '🔒'},
    {id: 3, name: '省电技巧', icon: '🔋'},
    {id: 4, name: '拍照技巧', icon: '📸'},
    {id: 5, name: '应用推荐', icon: '🚀'},
    {id: 6, name: '隐藏功能', icon: '🕵️'},
  ]);

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='container'>
      <View className='index-box'>
        <View className='index-title'>
          <Text>手机使用技巧</Text>
        </View>
        {/*搜索框*/}
        {/*<View className='search-box'>*/}
        {/*  <SearchBox />*/}
        {/*</View>*/}
        <View className='category-box'>
          {categories.map((item) => {
            return (
              <CategoryItem item={item} key={item.id} />
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default Index
