import { useState, useEffect } from 'react'

const useHeader = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0)

  useEffect(() => {
    const header = document.getElementById('header')

    if (!header) return

    setHeaderHeight(Number(header.offsetHeight))
  }, [])

  return [headerHeight]
}

export default useHeader
