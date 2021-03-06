import React from 'react'
import { useHistory } from 'react-router-dom'
import { HomeWrapper } from './style'

const Home = () => {
  const history = useHistory()

  const to = (target: string) => {
    history.push(target)
  }

  return (
    <HomeWrapper>
      <div className="container clearfix">
        <div className="pa macbook hover not-ready">
          <div className="screen">
            <div className="user_pic"></div>
            <div className="password"></div>
            <div className="icons clearfix">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
          <div className="base pr">
            <div className="connector"></div>
            <div className="keypad">
              <div className="clearfix">
                <div className="ftl key key2"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key2"></div>
              </div>
              <div className="clearfix pad-lr-10">
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
              </div>
              <div className="clearfix">
                <div className="ftl key key2"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key2"></div>
              </div>
              <div className="clearfix pad-lr-10">
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key3"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
                <div className="ftl key key1"></div>
              </div>
            </div>
            <div
              className="
            "
            ></div>
            <div className="pa shadow"></div>
          </div>
        </div>

        <div className="pa mouse hover not-ready">
          <div className="pa scroller"></div>
        </div>

        <div className="pa phone hover not-ready">
          <div className="speaker"></div>
          <div className="screen">
            <div className="screen_data"></div>
          </div>
          <div className="button"></div>
          <div className="pa volume_rockers"></div>
        </div>

        <div className="pa notes hover not-ready">
          <div className="note pr"></div>
        </div>

        <div className="pa pen hover not-ready">
          <div className="pen-nip">
            <div className="pen-tip"></div>
          </div>
          <div className="pa pen-bottom"></div>
        </div>

        <div className="pa handwatch hover not-ready" onClick={()=>to('/test')}>
          <div className="pr">
            <div className="belt"></div>
            <div className="pa dial">
              <div className="pa sun-hand"></div>
              <div className="pa hand1"></div>
              <div className="pa hand2"></div>
              <div className="pa button1"></div>
              <div className="pa button2"></div>
            </div>
          </div>
        </div>

        <div className="pa passbook hover not-ready">
          <div className="pr symbol">
            <div className="pa h_line"></div>
            <div className="pa v_line"></div>
            <div className="pa inner_circle"></div>
          </div>
          <div className="details1"></div>
          <div className="details2"></div>
          <div className="details3"></div>
        </div>

        <div className="pa diary hover" onClick={() => to('/reader')}>
          <div className="main">
            <div className="cover">
              <div className="pa less"></div>
            </div>
          </div>
        </div>

        <div className="pa pencil hover" onClick={() => to('/editor')}>
          <div className="pa pencil-bottom"></div>
          <div className="pencil-nip">
            <div className="pencil-tip"></div>
          </div>
        </div>

        <div className="pa lock hover not-ready">
          <div className="handle"></div>
          <div className="pr locker">
            <div className="pa key_hole"></div>
          </div>
        </div>

        <div className="pa mug hover not-ready">
          <div className="pr mug_head">
            <div className="pa coffee"></div>
            <div className="pa ear"></div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Home
