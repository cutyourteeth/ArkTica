import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { PreviewWrapper } from './style'
/* 本组件细节说明
 * 业务上
 * 基本功能：通过接受图片的url来展示图片
 * 操作：缩放、旋转、移动、归位、下载（暂缓）
 * 细节描述：
 * 基础：整个组件分为3层，外框（modal）、容器（container）、图片（image）
 *      外框随window尺寸自适应，同时影响到内部容器。容器初始大小仅受图片原始尺寸和最大视口影响。
 * 定位：图片加载完成后原始定位的确定，外框不能高度超过一屏、不能出现滚动条，容器和外框保持左右上10px，下50px间距。容器一旦定位即固定
 * 缩放：跟随鼠标缩放，缩放位置保持在光标中心，留意在图片旋转后依然要计算到中心
 * 旋转：根据中心旋转，同时影响容器尺寸变换
 * 归位：如字面意思。
 */

interface IProps {
  url: string
  showPreviewModal: boolean
  closePreviewModal: () => void
}

const initImageState = {
  w: 0, // width
  h: 0, // height
  r: 0, // rotate
  s: 1, // scale
  l: 0, // left
  t: 0, // top
  centerX: 0,
  centerY: 0,
  rotateTime: 0, // 旋转的次数
  everRotated: false // 之前是否经历过旋转
}

const naturalSize = {
  w: 0,
  h: 0
}
const initContainerState = {
  w: 0, // width
  h: 0, // height
  wMax: 0,
  hMax: 0
}

function PreviewModal(this: any, props: IProps) {
  const { url, showPreviewModal, closePreviewModal } = props

  const [imageState, setImageState] = useState(initImageState)
  const [containerState, setContainerState] = useState(initContainerState)
  const [naturalState, setNaturalState] = useState(naturalSize)

  // 临时路径函数： 服务本地public内的图片
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const newUrl = `${process.env.PUBLIC_URL}/static/image/${url}`
    console.log(newUrl)
    // here
    setImageUrl(newUrl)
  }, [url])

  // 设定图片的预设大小
  let container: { current: any } = useRef(null)
  let image: { current: any } = useRef(null)

  /*
   * 初始原始数据
   * 根据窗口比例调整内部Modal的限高/宽
   * 图片/窗口的w和h分别算出比例
   */
  useEffect(() => {
    const initialSizing = (node: HTMLImageElement) => {
      const wMax = window.innerWidth
      const hMax = window.innerHeight - 100 // 100为底部功能栏高度保留

      const wOrigin = node.naturalWidth // 初始的图片宽
      const hOrigin = node.naturalHeight // 初始的图片高度

      const wRatio = wOrigin / wMax
      const hRatio = hOrigin / hMax

      const size =
        wRatio < 1 && hRatio < 1 ? { w: wOrigin, h: hOrigin } : wRatio > hRatio ? { w: wMax, h: hOrigin / wRatio } : { w: wOrigin / hRatio, h: hMax }

      setNaturalState(size)
    }
    // 目前modal内无法直接通过ref.current 获得dom元素
    if (image.current) {
      setTimeout(() => {
        initialSizing(image.current)
        console.log('init');
        
      }, 0)
    }
  }, [imageUrl, showPreviewModal])

  /*
   * 管理容器尺寸
   */
  useEffect(() => setContainerState(s => ({ ...s, ...naturalState })), [naturalState])

  // 放大
  const zoomIn = () => setImageState(state => ({ ...state, s: imageState.s + 0.05 }))

  // 缩小
  const zoomOut = () => setImageState(state => ({ ...state, s: imageState.s - 0.05 }))

  // 顺时针旋转
  const rotateClockwise = () => {
    setImageState(s => {
      const updateState = { ...s }
      updateState.l = 0
      updateState.t = 0
      updateState.everRotated = true
      updateState.r = s.r + 90
      updateState.rotateTime = ++s.rotateTime
      return updateState
    })
    setContainerState(s => {
      const updatedState = { ...s }
      // 宽图扩展高,长图扩展宽
      // const ratio = imageState.wStatic / imageState.hStatic
      // ratio > 1 ? (updatedState.h = s.w) : (updatedState.w = s.h)
      return updatedState
    })
  }

  /* 滚轮时缩放 */
  const toScale = (e: any) => {
    e.stopPropagation()
    // 捕获元素盒子宽高属性
    const rect = image.current.getBoundingClientRect()
    const imageOffWindowLeft = rect.left
    const imageOffWindowTop = rect.top
    let imageWidth = rect.width
    let imageHeight = rect.height
    console.log('图片对窗口左偏移量', rect.left, '光标对窗口左偏移量', e.clientX)
    // 缩放差数
    let scaleDelta = e.deltaY < 0 ? +0.05 : -0.05 // 放大*1.05/缩小*0.95
    // 当图片是奇数次旋转时宽高对调
    const needExchange = imageState.rotateTime % 2 === 1
    if (needExchange) {
      ;[imageWidth, imageHeight] = [imageHeight, imageWidth]
    }
    // 缩放宽高
    let w = imageWidth * (1 + scaleDelta)
    let h = imageHeight * (1 + scaleDelta)
    // 原有的偏移量
    let lastLeft = imageState.l
    let lastTop = imageState.t
    /*
     * 本行为目的:
     * 之前经历过旋转,在下一次缩放时, 即刻调整其l,t参考点到旋转后的左上角,在计算其缩放后的偏移值
     * 解释:翻转后,state内的l,t参考点仍是翻转前的左上角,css翻转不会改变state内参数
     * 在此将参考点偏移到目前左上角, 计算最终图片l, t偏移量, 并且关闭everRotated
     */
    // if (needExchange && imageState.everRotated) {
    //     const deltaW = Math.abs(0.5 * (rect.width - rect.height))
    //     const deltaH = Math.abs(0.5 * (rect.height - rect.width))
    //     if (imageWidth / imageHeight >= 1) {
    //         // 超高图=>超宽图
    //         lastTop += deltaH
    //         lastLeft -= deltaW
    //     } else {
    //         // 超高图=>超宽图
    //         lastTop -= deltaH
    //         lastLeft += deltaW
    //     }
    // }
    // 保持缩放坐标点与鼠标坐标点重合
    let l = lastLeft - scaleDelta * (e.clientX - imageOffWindowLeft)
    let t = lastTop - scaleDelta * (e.clientY - imageOffWindowTop)
    setImageState(s => {
      const updateState = { ...s, w, h, l, t, everRotated: false }
      console.log('origin', s, 'current', updateState)
      return updateState
    })
  }

  const [disX, setDisX] = useState(0)
  const [disY, setDisY] = useState(0)
  const [draggable, setDraggable] = useState(false)

  // 拖拽开关
  const drag = (e: any) => {
    e.preventDefault()
    e.persist()
    console.log('drag')
    setDraggable(true)
    setDisX(e.clientX - image.current.offsetLeft)
    setDisY(e.clientY - image.current.offsetTop)
  }

  // 拖拽移动
  const startMove = function(e: any) {
    if (draggable) {
      let l = e.clientX - disX
      let t = e.clientY - disY

      setImageState(s => {
        const updateState = { ...s, l, t }
        return updateState
      })
      container.current.onselectstart = function() {
        return false
      }
    }
  }

  // 拖拽结束
  const endMove = function(e: any) {
    setDraggable(false)
    container.current.onselectstart = null
  }

  // 复位图片
  const reset = () => {}

  // 关闭modal 复位图片
  const closeModal = () => {
    closePreviewModal()
    setImageState(initImageState)
    setContainerState(initContainerState)
  }

  const Preview = styled.div`
    #preview-container {
      overflow: hidden;
      position: relative;
      width: ${containerState.w}px;
      height: ${containerState.h}px;
      max-height: ${containerState.hMax}px;
      max-width: ${containerState.wMax}px;
    }
    #preview-image {
      cursor: move;
      position: absolute;
      left: ${imageState.l}px;
      top: ${imageState.t}px;
      width: ${imageState.w}px;
      height: ${imageState.h}px;
      transform: translate3d(0, 0, 0) rotate(${imageState.r}deg) scale(${imageState.s}, ${imageState.s});
    }
  `

  return (
    <PreviewWrapper onCancel={closeModal} footer={null} visible={showPreviewModal}>
      <div>图片预览</div>
      <Preview>
        <div id="preview-container" ref={container} onMouseMove={startMove} onMouseUp={endMove}>
          <img id="preview-image" ref={image} src={imageUrl} alt="图片" onWheel={toScale} onMouseDown={drag} onSelect={void 0} />
        </div>
      </Preview>
      <div className="operation-bar">
        <i className="iconfont operator icon-zoom-in" onClick={zoomIn} />
        <i className="iconfont operator icon-zoom-out" onClick={zoomOut} />
        <i className="iconfont operator icon-rotate" onClick={rotateClockwise} />
        <i className="iconfont operator icon-sync" onClick={reset} />
        <i className="iconfont operator icon-download" />
      </div>
    </PreviewWrapper>
  )
}

export default PreviewModal
