type totalParams = {
  _id: string
  type: string
  title: string
  subtitle?: sttring
}

export type GoodPrice = totalParams & {
  list: PriceItem[]
}

export type PriceItem = {
  id: string
  picture_url: string
  verify_info: Verify
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews?: Reviews[]
  bottom_info?: {
    content: string
    content_color: string
    font_size: string
    visibility: string
  }
  lat: number
  lng: number
  image_url: string
}

type Reviews = {
  comment: string
  created_at: string
  is_translated: boolean
  localized_data: string
  reviewer_image_url: string
  review_id: string
}

type Verify = {
  kicker_badge?: {
    label: string
    type: string
  }
  messages: string[]
  text_color: string
}

type City = [
  '佛山' | '广州' | '成都' | '杭州' | '深圳' | '西安' | '重庆' | '长沙'
]

// const a: City = 'asd'
// console.log(a)

export type Discount = totalParams & {
  dest_address: {
    name: string
    homes: string[]
  }[]
  dest_list: {
    [K: string]: PriceItem[]
  }
}

export type LongFor = totalParams & {
  list: LongforItem[]
}

export type LongforItem = {
  city: string
  price: string
  picture_url: string
  image_url: string
}
