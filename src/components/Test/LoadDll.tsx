import React, { useCallback, useEffect, useState } from 'react'

const path = window.require('path')

const ffi = window.require('ffi-napi')

export const LoadDll = () => {
  const route = path.resolve('./public/static/dll/hello.dll')

  console.log(route)

  const [dll, setDll] = useState({ Hello: () => {}, Add: (a: number, b: number) => {} })

  const saveDll = useCallback(() => {
    try {
      // Call *.dll with ffi
      const dll = ffi.Library(route, {
        Add: ['float', ['float', 'float']],
        Hello: ['string', []],
        StrLength: ['int', ['string']],
      })
      setDll(dll)
      console.log('fii.Library result:', dll)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => saveDll(), [saveDll])

  //   dll.Hello()

  function hello() {
    if (dll) {
      let sum = dll.Add(5, 3)
      console.log(sum)
    }
  }

  return (
    <div>
      <button onClick={hello}>load addons</button>
    </div>
  )
}

export default LoadDll