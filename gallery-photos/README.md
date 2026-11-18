# Gallery photos

Every folder here is one album on the website's Gallery page. To add photos
you only copy files. No code changes are needed.

## Add photos to an existing album

1. Copy the photos into the album's folder, e.g. `baptism-service/`.
2. That's it. If `npm run dev` is running, the page updates on its own.
   Otherwise the photos are picked up the next time the site is built.

Photos are shown in **file-name order**, so start names with numbers to
control the order: `01-...jpg`, `02-...jpg`, `10-...jpg`.

Use JPG, PNG or WebP. iPhone **HEIC** photos aren't supported, so convert
them to JPG first (on an iPhone: Settings → Camera → Formats → *Most Compatible*).
Large phone photos are fine. The site resizes, compresses and rotates them
automatically, and the originals here are never changed.

## Create a new album

1. Make a new folder. Its name becomes the album's web address, so use
   lowercase and dashes, e.g. `youth-camp-2025` → `/gallery/youth-camp-2025`.
2. Put the photos in it.
3. Optionally add an `album.json` file (copy one from another album):

```json
{
  "title": "Youth Camp 2025",
  "subtitle": "Three days of worship and friendship",
  "label": "Youth",
  "date": "May 2025",
  "description": "A longer description shown at the top of the album page.",
  "order": 4,
  "cover": "03-group-photo.jpg",
  "captions": {
    "01-arrival.jpg": "Arriving at the camp",
    "03-group-photo.jpg": "The whole group"
  }
}
```

Every field is optional:

| Field         | What it does                                                    | If left out               |
|---------------|-----------------------------------------------------------------|---------------------------|
| `title`       | Album name                                                      | Made from the folder name |
| `subtitle`    | Short line on the album card                                    | Nothing shown             |
| `label`       | Small tag on the card, e.g. "Youth", "Special Service"          | Nothing shown             |
| `date`        | Any text, e.g. "2015", "May 2025", "2012 – 2015"                 | Nothing shown             |
| `description` | Paragraph at the top of the album page                          | Nothing shown             |
| `order`       | Position on the Gallery page (1 = first)                        | After numbered albums     |
| `cover`       | File name of the photo used on the album card                   | The first photo           |
| `captions`    | Caption per photo, by exact file name                           | No caption                |

Tip: a folder whose name starts with `_` (e.g. `_drafts`) is ignored. That's
handy for preparing an album before publishing it.

## Removing or renaming

Delete or rename the file or folder. The website follows automatically. If you
rename a photo, update its name in `album.json` too (captions and cover).

## If something looks wrong

Run `npm run gallery` and read the messages starting with `[gallery] ⚠`.
They point to problems such as a misspelt file name in `album.json`.
