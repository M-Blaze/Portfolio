import React, { useState, useEffect } from 'react'

const useHeader = () => {
  const [headerHeight, setHeaderHeight] = useState<number>()

  useEffect(() => {
    const height = document.getElementById('header')

    if (!height) return

    setHeaderHeight(Number(height.offsetHeight))
  }, [])

  return [headerHeight]
}

export default useHeader
