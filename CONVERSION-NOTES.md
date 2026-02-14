# Conversion Notes

## What Gets Converted

### From Disqus to WordPress

- **Threads** → **Posts**: Each Disqus thread becomes a WordPress post
- **Posts** → **Comments**: Each Disqus post (comment) becomes a WordPress comment
- **Comment Hierarchy**: Parent-child relationships are preserved
- **Metadata**: Author names, timestamps, and content are preserved

## What Gets Filtered Out

- Deleted comments (`isDeleted: true`)
- Spam comments (`isSpam: true`)
- Threads without any valid comments

## Mapping Details

### Thread to Post Mapping

| Disqus Field | WordPress Field | Notes |
|--------------|----------------|-------|
| `thread.title` | `wp:post_name` | Converted to slug format |
| `thread.link` | `link` and `guid` | Used as post URL |
| `thread.createdAt` | `wp:post_date` | Converted to WP format |
| `thread.author.username` | `dc:creator` | Post author |

### Post to Comment Mapping

| Disqus Field | WordPress Field | Notes |
|--------------|----------------|-------|
| `post.message` | `wp:comment_content` | HTML preserved in CDATA |
| `post.author.name` | `wp:comment_author` | Comment author name |
| `post.createdAt` | `wp:comment_date` | Converted to WP format |
| `post.parent` | `wp:comment_parent` | Mapped to WP comment ID |

## Comment ID Mapping

The converter creates a mapping between Disqus post IDs and WordPress comment IDs to preserve the comment hierarchy correctly. This ensures that reply relationships are maintained after import.

## Known Limitations

1. **Email addresses**: Not included in Disqus exports, so `wp:comment_author_email` is empty
2. **IP addresses**: Not included in Disqus exports, so `wp:comment_author_IP` is empty
3. **Post content**: Threads don't have content in Disqus, so `content:encoded` is empty
4. **Categories**: Not converted (can be added manually in WordPress)
5. **Tags**: Not converted (can be added manually in WordPress)

## Post-Import Steps

After importing the WXR file into WordPress:

1. Review imported posts and comments
2. Assign appropriate categories and tags
3. Update post content if needed
4. Map comment authors to WordPress users if desired
5. Check comment moderation settings
6. Verify comment threading is working correctly

## Troubleshooting

### Comments not showing up

- Check that the post URLs match your WordPress site structure
- Verify comment status is set to "open" in WordPress
- Check WordPress comment moderation settings

### Comment hierarchy broken

- Ensure the WXR file was imported completely
- Check that parent comment IDs are correctly mapped
- Verify WordPress threading settings (Settings → Discussion)

### Missing comments

- Check if comments were marked as spam or deleted in Disqus
- Verify the conversion didn't filter them out
- Check WordPress spam folder after import
