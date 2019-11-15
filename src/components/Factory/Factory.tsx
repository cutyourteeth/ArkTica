import { Button } from 'antd'
import React, { useState } from 'react'
import PreviewModal from './components/Preview/PreviewModal'



const longImage='long-image.jpg'
const thickImage='thick-image.jpg'


const testData = {
  longImage,
  thickImage
}

export function Factory(this: any) {
  const [onShowPreview, setOnShowPreview] = useState(false)
  const [currentResource, setCurrentResource] = useState<string>('')
  const openPreviewModal = (url: string) => {
    setCurrentResource(url)
    setOnShowPreview(true)
  }
  const closePreviewModal = () => {
    setOnShowPreview(false)
  }

  return (
    <div>
      here is the factory
      <Button onClick={openPreviewModal.bind(this, testData.longImage)}>Long Preview</Button>
      <Button onClick={openPreviewModal.bind(this, testData.thickImage)}>Thick Preview</Button>
      <div className="workbench">
        <PreviewModal url={currentResource} showPreviewModal={onShowPreview} closePreviewModal={closePreviewModal} />
      </div>
    </div>
  )
}
