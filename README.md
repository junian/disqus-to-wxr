# Disqus to WXR Converter

A TypeScript CLI tool to convert Disqus XML Export files into WordPress WXR (WordPress eXtended RSS) format.

## Features

- Converts Disqus threads to WordPress posts
- Converts Disqus comments to WordPress comments
- Preserves comment hierarchy (parent-child relationships)
- Filters out deleted and spam comments
- Customizable site metadata (title, URL, description)

## Installation

```bash
npm install
npm run build
```

## Usage

### Basic Usage

```bash
npm start -- <input-file> [output-file]
```

### Examples

```bash
# Convert with default output filename (adds -wxr suffix)
npm start -- example-disqus.xml
# Output: example-disqus-wxr.xml

# Specify output filename
npm start -- example-disqus.xml my-comments.xml

# With custom site metadata
npm start -- example-disqus.xml output.xml \
  --title "My Blog" \
  --url "https://myblog.com" \
  --description "My awesome blog"
```

### CLI Options

Run with `--help` to see all options:

```bash
npm start -- --help
```

Available options:
- `-t, --title <title>` - Site title (default: "Converted from Disqus")
- `-u, --url <url>` - Site URL (default: "http://example.com")
- `-d, --description <description>` - Site description (default: "Converted comments from Disqus")
- `-V, --version` - Output version number
- `-h, --help` - Display help

## How It Works

1. Reads the Disqus XML export file
2. Parses threads and posts (comments)
3. Filters out deleted and spam comments
4. Groups comments by thread
5. Generates WordPress WXR format with:
   - Each thread becomes a WordPress post
   - Each Disqus comment becomes a WordPress comment
   - Comment hierarchy is preserved
   - Timestamps are converted to WordPress format

## Import to WordPress

After conversion:

1. Log in to your WordPress admin panel
2. Go to Tools → Import
3. Choose "WordPress" importer
4. Upload the generated WXR file
5. Follow the import wizard

## Development

```bash
# Build
npm run build

# Run after building
npm start -- example-disqus.xml

# Build and run
npm run dev -- example-disqus.xml
```

## License

ISC
