# Google Calendar Integration Setup Guide

This guide will help you connect your Google Calendar to the website so events display automatically.

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click on the project dropdown at the top
4. Click "New Project"
5. Enter project name: "IPC Hebron Website" (or any name)
6. Click "Create"
7. Wait for the project to be created and select it

## Step 2: Enable Google Calendar API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click on "Google Calendar API"
4. Click "Enable"
5. Wait for it to enable (takes a few seconds)

## Step 3: Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key that appears (you'll need this later)
4. **Important:** Click "Restrict Key" to secure it:
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Calendar API" from the list
   - Click "Save"

## Step 4: Get Your Calendar ID

1. Go to [Google Calendar](https://calendar.google.com/)
2. On the left sidebar, find your calendar (or create a new one for church events)
3. Click the three dots (⋮) next to your calendar name
4. Click "Settings and sharing"
5. Scroll down to "Integrate calendar" section
6. Copy the "Calendar ID" (it looks like: `abc123@group.calendar.google.com` or `your-email@gmail.com`)

## Step 5: Make Calendar Public

1. In the same "Settings and sharing" page
2. Under "Access permissions"
3. Check "Make available to public"
4. Select "See all event details" from the dropdown
5. Click "Save"

## Step 6: Configure Environment Variables

1. In your project root, create a file named `.env` (if it doesn't exist)
2. Copy the content from `.env.example`:
   ```env
   VITE_GOOGLE_CALENDAR_API_KEY=your_api_key_here
   VITE_GOOGLE_CALENDAR_ID=your_calendar_id_here
   ```
3. Replace `your_api_key_here` with your API key from Step 3
4. Replace `your_calendar_id_here` with your Calendar ID from Step 4
5. Save the file

## Step 7: Restart Development Server

After adding environment variables, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 8: Test the Integration

1. Add a test event to your Google Calendar
2. Make sure it's not marked as a holiday
3. Visit the Events page on your website
4. The event should appear automatically!

## Filtering Out Holidays

The integration automatically filters out:
- Events marked as "transparent" (holidays often are)
- Events marked as "out of office"
- Events with "holiday" in the title
- Events from holiday calendars

## Tips for Managing Events

1. **Event Title:** Use clear, descriptive titles
2. **Description:** Add location in description like "Location: Church Main Hall"
3. **Category:** Add category in description like "Category: Youth" (optional)
4. **Time:** Set specific times for events (not just all-day)
5. **Location:** Add location in the event location field

## Troubleshooting

### Events not showing up?
- Check that your calendar is set to "Public"
- Verify your API key is correct
- Make sure the Calendar ID is correct
- Check browser console for errors
- Ensure events are in the future (not past)

### Getting API errors?
- Verify Google Calendar API is enabled
- Check that API key restrictions allow Calendar API
- Make sure the calendar ID is correct
- Check that the calendar is public

### Events showing but holidays also appearing?
- The system filters common holidays, but you may need to:
  - Mark holiday events as "Free" (transparent) in Google Calendar
  - Or add "holiday" to the event title so it gets filtered
  - Or use a separate calendar for holidays

## Security Notes

- **Never commit `.env` file to Git** (it's already in .gitignore)
- **Restrict your API key** to only Google Calendar API
- **Use environment variables** for production deployment
- **Set up API key restrictions** in Google Cloud Console

## Production Deployment

When deploying to Vercel/Netlify:

1. Go to your project settings
2. Find "Environment Variables" section
3. Add:
   - `VITE_GOOGLE_CALENDAR_API_KEY` = your API key
   - `VITE_GOOGLE_CALENDAR_ID` = your calendar ID
4. Redeploy your site

## Alternative: Using a Service Account (Advanced)

For more control, you can use a Service Account instead of an API key. This requires:
1. Creating a Service Account in Google Cloud
2. Sharing your calendar with the service account email
3. Using server-side authentication

This is more complex but offers better security for private calendars.

---

**Need Help?** Check Google Calendar API documentation: https://developers.google.com/calendar/api
