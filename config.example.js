// AdSense Configuration Example
// Copy this file to config.js and replace with your actual AdSense details
// This file is safe to commit to public repositories

const AD_CONFIG = {
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID_HERE',
    adSlots: {
        topAd: 'YOUR_TOP_AD_SLOT_ID',
        leftSidebarAd: 'YOUR_LEFT_SIDEBAR_AD_SLOT_ID',
        compressionAd: 'YOUR_COMPRESSION_AD_SLOT_ID',
        bottomAd: 'YOUR_BOTTOM_AD_SLOT_ID',
        sidebarAd: 'YOUR_SIDEBAR_AD_SLOT_ID'
    }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.AD_CONFIG = AD_CONFIG;
}
