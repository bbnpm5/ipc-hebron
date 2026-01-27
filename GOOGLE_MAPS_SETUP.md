# Google Maps Integration Setup Guide

This guide will help you add a Google Map to display your church location on the Contact page.

## Method 1: Using Google Maps Embed API (Recommended - FREE, No API Key Required)

This is the simplest method and doesn't require an API key for basic embedding.

### Step 1: Get Your Location Coordinates

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your church address: "IPC Hebron, Periyadka Road, Neria Post, Belthangady TQ, D.K, Karnataka, India"
3. Right-click on the exact location marker
4. Click on the coordinates that appear (e.g., "12.9876, 75.1234")
5. Copy the coordinates (latitude, longitude)

### Step 2: Generate Embed Code

1. In Google Maps, click on the location marker
2. Click on the "Share" button
3. Select the "Embed a map" tab
4. Choose your map size (Medium or Large works well)
5. Copy the iframe code that appears

### Step 3: Update the Contact Page

The iframe code will look like this:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

Replace the iframe in `src/pages/Contact.jsx` with your copied code.

### Alternative: Manual URL Construction

If you have the coordinates, you can construct the URL manually:

```
https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=IPC+Hebron,+Periyadka+Road,+Neria+Post,+Belthangady+TQ,+D.K,+Karnataka,+India
```

Or using coordinates:
```
https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=12.9876,75.1234
```

---

## Method 2: Using Google Maps JavaScript API (Advanced - Requires API Key)

This method gives you more control but requires setting up an API key.

### Step 1: Enable Google Maps JavaScript API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Go to "APIs & Services" > "Library"
4. Search for "Maps JavaScript API"
5. Click "Enable"

### Step 2: Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key
4. **Important:** Click "Restrict Key" and:
   - Under "API restrictions", select "Restrict key"
   - Choose "Maps JavaScript API" from the list
   - Click "Save"

### Step 3: Add API Key to Environment Variables

Add to your `.env` file:
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Step 4: Update Contact Page

The code will use the Google Maps JavaScript API to create an interactive map.

---

## Quick Setup (Recommended Method 1)

**Fastest way to get your map:**

1. Open [Google Maps](https://www.google.com/maps)
2. Search: "IPC Hebron, Periyadka Road, Neria Post, Belthangady TQ, D.K, Karnataka, India"
3. Click on the location marker
4. Click "Share" > "Embed a map"
5. Copy the iframe code
6. Replace the iframe in `src/pages/Contact.jsx` (around line 258)

That's it! The map will display immediately.

---

## Customizing the Map

### Change Map Type
Add `&maptype=roadmap` (default) or `&maptype=satellite` to the URL

### Set Zoom Level
Add `&zoom=15` (1-20, where 20 is most zoomed in)

### Add Marker
The location will automatically have a marker. To customize:
- Use Google Maps JavaScript API (Method 2)
- Or use custom marker icons with the Embed API

---

## Troubleshooting

### Map not showing?
- Check that the iframe src URL is correct
- Make sure there are no CORS errors in browser console
- Verify the address/coordinates are correct

### Map shows wrong location?
- Double-check the coordinates or address
- Try searching for the exact address in Google Maps first
- Use the "Share" > "Embed" method for accuracy

### Want to use your existing Google API Key?
- You can use the same API key from Google Calendar setup
- Just enable "Maps JavaScript API" or "Maps Embed API" in Google Cloud Console
- Add it to the embed URL: `&key=YOUR_API_KEY`

---

## Example Embed URL Structure

```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123!2d75.123!3d12.987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzE1LjYiTiA3NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin
```

The easiest way is to use Google Maps' built-in "Share" > "Embed" feature to get the exact code for your location.

---

**Need Help?** 
- Google Maps Embed API: https://developers.google.com/maps/documentation/embed
- Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript
