# News Updates Automation

This edge function automatically fetches news updates from https://www.taipofire.gov.hk/eng/press.html and stores them in the database.

## How to Use

### Manual Trigger

To manually fetch the latest news updates, call the edge function:

```bash
curl -X POST https://kjuikabdvbtcwxuvfhmz.supabase.co/functions/v1/fetch-news-updates
```

### Automatic Updates

To set up automatic updates, you can:

1. **Use a cron job service** (e.g., cron-job.org, EasyCron, or GitHub Actions)
   - Schedule the above curl command to run every hour or as needed

2. **Use Supabase Cron** (if available in your plan)
   - Configure a scheduled job in your Supabase dashboard

### Response Format

The function returns:
```json
{
  "success": true,
  "total": 15,
  "inserted": 3,
  "skipped": 12,
  "items": [...]
}
```

- `total`: Total news items found on the website
- `inserted`: Number of new items added to database
- `skipped`: Number of items already in database

### News Display

News items are automatically displayed in the news ticker on the homepage, combining:
- Static news items from translations (Philippines Consulate, Labour Dept info)
- Dynamic news items from the database (fetched from taipofire.gov.hk)

### Troubleshooting

If news items aren't showing:
1. Check the edge function logs in Supabase
2. Verify the website structure hasn't changed
3. Check RLS policies on the `news_updates` table
4. Ensure the function has been called at least once

### Database Schema

The `news_updates` table stores:
- `title_en`: English title (required)
- `title_zh`, `title_tl`, `title_id`: Other language versions (optional)
- `link`: Link to the full article
- `published_date`: Date of publication
- `source`: Source of the news (default: 'taipofire.gov.hk')
- `is_active`: Whether to display this news item

### Manual News Management

You can also manually add news items directly to the database through the Lovable Cloud backend interface or using SQL:

```sql
INSERT INTO news_updates (title_en, link, published_date, source)
VALUES ('Your news title', 'https://example.com', '2025-11-30', 'Custom Source');
```
