import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function UserInfoPage () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='UserInfoPage'>
      <Text>用户信息页</Text>
    </View>
  )
}
