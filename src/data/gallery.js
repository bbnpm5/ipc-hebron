// Albums and photos come from /gallery-photos. The file below is generated
// by scripts/build-gallery.mjs (runs automatically before dev and build).
// To add photos, see gallery-photos/README.md. There's no need to edit code.
import data from '../generated/gallery.json'

export const albums = data.albums

export const getAlbum = (id) => albums.find((album) => album.id === id)

export const getCover = (album) => album.photos[album.coverIndex] || album.photos[0]

export const totalPhotos = albums.reduce((sum, album) => sum + album.photos.length, 0)
