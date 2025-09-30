const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Wedding Invitation - Viktor & Helen",
    // Opening message/description of the invitation
    description:
      "Join us in celebrating our special day as we begin our journey together as husband and wife.",
    // Groom's name
    groomName: "Viktor",
    // Bride's name
    brideName: "Helen",
    // Groom's parents names
    parentGroom: "Mr. & Mrs. Paliichuk",
    // Bride's parents names
    parentBride: "Mr. & Mrs. Smith",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-09",
    // Google Maps link for directions (opens Google Maps with directions)
    maps_url: "https://www.google.com/maps/dir/?api=1&destination=38.8276521,0.0029424",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6216.419923666835!2d0.00036747612792958223!3d38.82765207173907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1d56634df973%3A0xcf858c5ade473f6!2sCasa%20Santonja!5e0!3m2!1sen!2ses!4v1759185632868!5m2!1sen!2ses",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "4:00 PM - 11:00 PM",
    // Venue/building name
    location: "Casa Santonja",
    // Full address of the wedding venue
    address: "CV-729, s/n, 03778 Beniarbeig, Alicante",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Ceremony",
        // Event date (format: YYYY-MM-DD)
        date: "2025-11-09",
        // Start time (format: HH:MM)
        startTime: "16:00",
        // End time (format: HH:MM)
        endTime: "17:00",
        // Event venue
        location: "Casa Santonja",
        // Full address
        address: "CV-729, s/n, 03778 Beniarbeig, Alicante",
      },
      {
        // Second event name
        title: "Cocktail Hour",
        date: "2025-06-15",
        startTime: "17:00",
        endTime: "18:00",
        location: "Casa Santonja",
        address: "123 Wedding Lane, New York, NY 10001",
      },
      {
        // Third event name
        title: "Reception",
        date: "2025-06-15",
        startTime: "18:00",
        endTime: "23:00",
        location: "Casa Santonja",
        address: "123 Wedding Lane, New York, NY 10001",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Chase Bank",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "VIKTOR PALIICHUK",
      },
      {
        bank: "Bank of America",
        accountNumber: "0987654321",
        accountName: "HELEN SMITH",
      }
      // You can add more banks with the same format
    ],

    // Photo gallery images
    photos: [
      '/photos/DSC00615.jpg',
      '/photos/DSC00757.jpg',
      '/photos/DSC00840.jpg',
      '/photos/DSC00970.jpg',
      '/photos/DSC01116.jpg',
      '/photos/DSC01221.jpg'
    ]
  }
};

export default config;