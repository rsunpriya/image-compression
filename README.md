# Image Compressor - Secure & Auto-Clean

A modern, secure online image compression tool that processes images entirely in your browser for maximum privacy.

## Features

- 🚀 **Fast Compression**: Smart algorithms for optimal file size reduction
- 🔒 **100% Private**: All processing happens in your browser
- 🧹 **Auto-Clean**: Files automatically deleted after 1 hour
- 📱 **Responsive**: Works perfectly on all devices
- 🎛️ **Quality Control**: Adjustable compression settings
- 📊 **Before/After Comparison**: Visual comparison of results

## Setup Instructions

### 1. Basic Setup
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start compressing images!

### 2. AdSense Configuration (Optional)

If you want to monetize with Google AdSense:

1. **Copy the example config:**
   ```bash
   cp config.example.js config.js
   ```

2. **Edit `config.js` with your AdSense details:**
   ```javascript
   const AD_CONFIG = {
       publisherId: 'ca-pub-1234567890123456', // Your actual publisher ID
       adSlots: {
           topAd: '1234567890',           // Your top ad slot ID
           leftSidebarAd: '1234567891',   // Your left sidebar ad slot ID
           compressionAd: '1234567892',   // Your compression area ad slot ID
           bottomAd: '1234567893',        // Your bottom ad slot ID
           sidebarAd: '1234567894'        // Your right sidebar ad slot ID
       }
   };
   ```

3. **Important Security Notes:**
   - `config.js` is automatically ignored by Git (see `.gitignore`)
   - Never commit your actual AdSense details to public repositories
   - Keep `config.example.js` as a template for others

### 3. Getting AdSense Details

1. Go to [Google AdSense](https://www.google.com/adsense)
2. Create ad units for each placement
3. Copy the publisher ID and ad slot IDs
4. Paste them into your `config.js` file

## File Structure

```
Image Converter/
├── index.html          # Main application
├── config.js           # Your AdSense config (private)
├── config.example.js   # Example config template
├── logo.svg           # App logo
├── logo-icon.svg      # Favicon
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Privacy & Security

- **No Server Upload**: Images never leave your device
- **Client-Side Processing**: All compression happens in your browser
- **Automatic Cleanup**: Data deleted after 1 hour
- **No Tracking**: No analytics or tracking scripts
- **Open Source**: Transparent code for security verification

## Supported Formats

- JPEG/JPG
- PNG
- WebP
- GIF
- BMP

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please check the code comments or create an issue in the repository.
