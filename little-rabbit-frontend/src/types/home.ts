export interface HomeCategoryHeadVO {
  /**
   * 子分类数组
   */
  children: HomeCategoryHeadChild[]
  /**
   * 分类下属商品
   */
  goods: Good[]
  /**
   * 分类id
   */
  id: string
  /**
   * 分类名字
   */
  name: string
  /**
   * 分类图片
   */
  picture: string
  [property: string]: any
}

export interface HomeGoodsVO {
  /**
   * 子分类数组
   */
  children: HomeGoodsChild[]
  /**
   * 分类下属商品
   */
  goods: Good[]
  /**
   * 分类id
   */
  id: string
  /**
   * 分类名字
   */
  name: string
  /**
   * 分类图片
   */
  picture: string
  /**
   * 销售简介
   */
  saleInfo: string
  [property: string]: any
}

export interface HomeGoodsChild {
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名字
   */
  name: string
  /**
   * 分类层级，2 表示二级分类
   */
  layer: number
  /**
   * 父级分类id，null 表示无父级
   */
  parent: string | null
  [property: string]: any
}

export interface HomeCategoryHeadChild {
  /**
   * 三级分类数组，三级分类数组(暂无)
   */
  children: null
  /**
   * 二级级分类下属商品数组，二级分类商品数组(暂无)
   */
  goods: null
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名字
   */
  name: string
  /**
   * 二级分类图片
   */
  picture: string
  [property: string]: any
}

export interface Good {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣，如为null时，即无折扣
   */
  discount: null
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品销量
   */
  orderNum: null
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
  [property: string]: any
}

export interface BannerVO {
  /**
   * 轮播图跳转链接
   */
  hrefUrl: string
  /**
   * 轮播图id
   */
  id: string
  /**
   * 轮播图地址
   */
  imgUrl: string
  /**
   * 轮播图跳转类型，跳转类型: 1、页面2、H5 3、小程序（小程序使用）
   */
  type: string
  [property: string]: any
}

export interface NewVO {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: null
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品订单数(销量)
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
  [property: string]: any
}

export interface HotVO {
  /**
   * 品牌描述
   */
  desc: string
  /**
   * 品牌id
   */
  id: string
  /**
   * 品牌logo图片地址
   */
  logo: string
  /**
   * 品牌中文名字
   */
  name: string
  /**
   * 品牌英文名字
   */
  nameEn: string
  /**
   * 品牌图片地址
   */
  picture: string
  /**
   * 品牌产地
   */
  place: string
  /**
   * 品牌类型，暂无数据
   */
  type: null
  [property: string]: any
}
