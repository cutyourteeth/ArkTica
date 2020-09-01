import React from 'react'

const longImage = 'long-image.jpg'
const thickImage = 'thick-image.jpg'

const testData = {
  longImage,
  thickImage,
}

export function Workbench(this: any) {
  return (
    <div>
      here is the factory
      <div className="workbench"></div>
    </div>
  )
}
