import { useCallback, useState } from 'react'

/**
 * Photo that loads only when it scrolls into view, showing a tiny blurred
 * preview until the real image has arrived, then fading it in.
 * Pass width/height so the space is reserved and the page doesn't jump.
 * Give it a `key` of the src if the src can change, so the fade restarts.
 */
const LazyImage = ({
  src,
  placeholder,
  alt,
  width,
  height,
  eager = false,
  className = '',
  imgClassName = '',
  fill = false
}) => {
  const [loaded, setLoaded] = useState(false)

  // Already-cached images may finish before React attaches onLoad
  const imgRef = useCallback((el) => {
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true)
  }, [])

  return (
    <div
      className={`${fill ? 'absolute inset-0' : 'relative'} overflow-hidden bg-gray-200 ${className}`}
      style={!fill && width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover scale-110 blur-xl transition-opacity duration-700 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`relative w-full h-full object-cover transition-[opacity,transform] duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  )
}

export default LazyImage
