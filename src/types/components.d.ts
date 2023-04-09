import type AirbnbHeader from '@/components/AirbnbHeader/index.vue'
import type SectionHeader from '@/components/SectionHeader/index.vue'
import type RoomItem from '@/components/RoomItem/index.vue'
import type SectionRooms from '@/components/SectionRooms/index.vue'
import type SectionTabs from '@/components/SectionTabs/index.vue'
import type SectionFooter from '@/components/SectionFooter/index.vue'
import type ScrollView from '@/components/ScrollView/index.vue'
import type LongforItem from '@/components/LongforItem/index.vue'
import type Indicator from '@/components/Indicator/index.vue'

declare module 'vue' {
  interface GlobalComponents {
    AirbnbHeader: typeof AirbnbHeader
    SectionHeader: typeof SectionHeader
    RoomItem: typeof RoomItem
    SectionRooms: typeof SectionRooms
    SectionTabs: typeof SectionTabs
    SectionFooter: typeof SectionFooter
    ScrollView: typeof ScrollView
    LongforItem: typeof LongforItem
    Indicator: typeof Indicator
  }
}
