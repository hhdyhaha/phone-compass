import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function CategoryItem () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const params =Taro.getCurrentInstance().router?.params
  console.log(params)

  return (
    <View className='CategoryItem'>
      <Text>Hello world!</Text>
    </View>
  )
}
