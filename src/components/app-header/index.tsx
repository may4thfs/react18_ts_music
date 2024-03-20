import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

interface IHeaderTitle {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = memo(() => {
  /** 定义组件内部的状态 */
  // const [currentIndex, setCurrentIndex] = useState(0)

  /** 组件的展示逻辑 */
  function showItem(item: IHeaderTitle) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          // 在你想修改默认类名的时候，可以使用这种方式。否则直接实现active样式即可
          // className={({ isActive }) => {
          //   return isActive ? 'activehaha' : undefined
          // }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
