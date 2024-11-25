import {View, Text, Image} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'

import './index.scss'
import {useState, useEffect} from "react";

// 列表item
function CategoryListItem({item, index}: any) {
  const handlePreImage = (img: string) => {
    Taro.previewMedia(
      {
        sources: [
          {
            url: img,
            type: 'image'
          }
        ]
      }
    )
  }
  return (
    <View className='category-item-list-item' key={item.id}>
      <View className='category-item-list-item-index'>{index + 1}</View>
      <View className='category-item-list-item-title'>{item.title}</View>
      <View className='category-item-list-item-content'>{item.content}</View>
      {/*  图片*/}
      <View className='category-item-list-item-img'>
        {item.media.imagesUrl.map((img: string) => (
          <View className='category-item-list-item-img-item' key={img}>
            <Image src={img} mode='widthFix' onClick={() => handlePreImage(img)}/>
          </View>
        ))}
      </View>
    </View>
  )
}

export default function CategoryItem() {
  interface Params {
    $taroTimestamp: number
    id: string
    name: string
  }

  const params = Taro.getCurrentInstance().router?.params as unknown as Params;
  const parentId = params.id

  interface GuideItem {
    id: number;
    categoryId: string;
    title: string;
    content: string;
    tags: string[];
    difficulty: string;
    media: {
      imagesUrl: string[];
    };
    updatedAt: string;
  }

  const [guideList, setGuideList] = useState<GuideItem[]>([
    {
      "id": 101,
      "categoryId": '1',
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
  const [filteredGuides, setFilteredGuides] = useState<GuideItem[]>([]); // 新增过滤后的列表

  useEffect(() => {
    const filterGuidesByCategory = () => {
      return guideList.filter((item: any) => {
        return item.categoryId === parentId
      })
    }
    const newGuideList = filterGuidesByCategory()
    setFilteredGuides(newGuideList)
    console.log(newGuideList);

  }, [guideList, parentId])
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='category-item-box'>
      {/*  标题*/}
      <View className='category-item-text'>{params.name}</View>
      {/*  列表*/}
      <View className='category-item-list'>
        {filteredGuides.map((item, index) => (
          <CategoryListItem item={item} index={index} key={item.id}/>
        ))}
      </View>
    </View>
  )
}
