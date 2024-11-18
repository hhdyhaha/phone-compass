import {View, Text, Image} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.scss'
import {useState} from "react";

// 列表item
function CategoryListItem({item, index}: any) {
  return (
    <View className='category-item-list-item' key={item.id}>
      <View className='category-item-list-item-index'>{index + 1}</View>
      <View className='category-item-list-item-title'>{item.title}</View>
      <View className='category-item-list-item-content'>{item.content}</View>
      {/*  图片*/}
      <View className='category-item-list-item-img'>
        {item.media.imagesUrl.map((img: string) => (
          <View className='category-item-list-item-img-item' key={img}>
            <Image src={img} mode='widthFix' />
          </View>
        ))}
      </View>
    </View>
  )
}

export default function CategoryItem() {
  const [guideList, setGuideList] = useState([
    {
      "id": 101,
      "categoryId": 1,
      "title": "快速切换网络模式",
      "content": "在拨号界面输入 *#*#4636#*#*，即可快速切换网络模式。",
      "tags": ["网络", "快捷操作"],
      "difficulty": "简单",
      "media": {
        "imagesUrl": ["https://c-ssl.dtstatic.com/uploads/blog/202303/03/20230303143818_11374.thumb.1000_0.jpeg", "https://c-ssl.dtstatic.com/uploads/blog/202303/03/20230303143818_11374.thumb.1000_0.jpeg"],
      },
      "updatedAt": "2024-11-16"
    }
  ])
  useLoad(() => {
    console.log('Page loaded.')
  })

  const params = Taro.getCurrentInstance().router?.params
  console.log(params)

  return (
    <View className='category-item-box'>
      {/*  标题*/}
      <View className='category-item-text'>{params.name}</View>
      {/*  列表*/}
      <View className='category-item-list'>
        {guideList.map((item, index) => (
          <CategoryListItem item={item} index={index} key={item.id} />
        ))}
      </View>
    </View>
  )
}
