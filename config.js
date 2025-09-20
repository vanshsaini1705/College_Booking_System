// Configuration file for Garba Night Website
const CONFIG = {
    // Event Details
    event: {
        name: "Garba Night",
        year: "2025",
        date: "September 26th, 2025",
        time: "6:00 PM - 9:00 PM",
        venue: "RCERT Open Air Theatre",
        eventDateTime: "2025-09-26 18:00:00" // For countdown timer
    },

    // Location for Map Integration
    location: {
        lat: 26.76783682291688, 
        lng: 75.85645978195025,
        address: "RCERT Open Air Theatre, Jaipur, Rajasthan, India"
    },

    // Booking Configuration
    booking: {
        formUrl: "https://forms.gle/xheQFTJgfEeYPuzK7" // Google Form URL
    },

    // Contact Information
    contact: {
        email: "eventcollege123@gmail.com",
        phone: {
            "Vansh Saini": "+91 9887799990",
            "Rohit Sharma": "+91 8875445062", 
            "Harsh Sharma": "+91 9079934306"
        }
    },

    // College Information
    college: {
        name: "RCERT",
        fullName: "Regional College of Engineering & Research Technology",
        logo: "assets/logo_name.png",
        website: "https://regional.ac.in/",
        description: "Regional College of Engineering & Research Technology (RCERT) is a premier educational institution committed to excellence in technical education. Our annual Garba Night celebration brings together students, faculty, and the community to celebrate the rich cultural heritage of Rajasthan."
    },

    // Developers Information
    developers: [
        {
            name: "Vansh Saini",
            role: "Lead Developer",
            social: {
                github: "https://github.com/vanshsaini1705",
                linkedin: "https://www.linkedin.com/in/vansh-saini-ba04262bb/",
                instagram: "https://www.instagram.com/vanshsaini1705/"
            }
        },
        {
            name: "Rohit Sharma",
            role: "Frontend Developer",
            social: {
                instagram: "https://www.instagram.com/its_rohit05824/",
                linkedin: "https://www.linkedin.com/in/rohit-sharma-a21a632a3/"
            }
        }
    ],

    // Event Rules and Guidelines
rules: {
  title: "RCERT Garba Night Event Guidelines",
  event_details: {
    "Organized by": "RCERT Students’ Committee",
    "Date": "Friday, 26 September 2025",
    "Time": "6:00 PM to 9:00 PM",
    "Venue": "College Ground",
    "Entry": "ID is mandatory (Aadhar ID, College ID etc.)"
  },
  categories: [
    {
      category: "General Rules",
      rules: [
        "Entry is permitted only for college students and invited guests with valid ID cards/passes.",
        "Outside food, drinks, or any prohibited substances are strictly not allowed.",
        "Maintain discipline and decorum inside the campus at all times.",
        "Respect cultural values—traditional attire is encouraged.",
        "Photography and videography are allowed, but avoid obstructing the performance area."
      ]
    },
    {
      category: "Dress Code",
      rules: [
        "Traditional/ethnic wear is mandatory (Chaniya Choli, Kurta Pajama, Kediyu, etc.).",
        "Avoid wearing sharp jewelry or accessories that may cause injury while dancing.",
        "Comfortable footwear recommended."
      ]
    },
    {
      category: "Dance Floor Guidelines",
      rules: [
        "Only registered participants are allowed on the dance floor.",
        "Follow the circle movement of Garba/Dandiya; avoid pushing or rushing.",
        "No rough play, misbehavior, or unsafe dance steps.",
        "Use college-provided dandiya sticks only (if applicable).",
        "Outsiders must carry their own dandiya sticks.",
        "Report any accidents or injuries immediately to the event volunteers."
      ]
    },
    {
      category: "Safety & Security",
      rules: [
        "Security personnel and volunteers will be present for crowd management.",
        "First-aid and medical support will be available at the venue.",
        "Any form of harassment, misconduct, or misbehavior will lead to strict disciplinary action."
      ]
    },
    {
      category: "Participation & Competitions",
      rules: [
        "Competitions like Best Garba Dancer, Best Traditional Dress, and Best Couple Performance will be held.",
        "Participants must register in advance with the Student Committee.",
        "Judges’ decisions will be final."
      ]
    },
    {
      category: "Additional Notes",
      rules: [
        "Carry your college ID card at all times.",
        "Keep the venue clean—use dustbins provided.",
        "Enjoy responsibly, and let’s make this Garba Night a safe, fun, and memorable celebration!"
      ]
    }
  ],
  event_coordinators: [
    {
      "name": "Rohit Sharma",
      "contact": "88754 45062"
    },
    {
      "name": "Harsh Sharma",
      "contact": "90799 34306"
    },
    {
      "name": "Vansh Saini",
      "contact": "98877 99990"
    }
  ]
}
    // UI Assets
    ui: {
        heroBackground: "assets/Header_image.png",
        collegeImage: "assets/College_pic.png",
        rulesImage: "assets/Rules&Guidelines.png"
    },

    // Feature Toggles
    features: {
        enableCountdown: true,
        enableDeveloperSection: true,
        enableRulesModal: true,
        enableMapIntegration: true
    }
};

// Simplified Helper Functions
const ConfigHelper = {
    // Get formatted event date for countdown
    getEventDate: () => {
        return new Date(CONFIG.event.eventDateTime);
    },

    // Get Google Maps URL
    getMapUrl: () => {
        const { lat, lng } = CONFIG.location;
        return `https://www.google.com/maps?q=${lat},${lng}`;
    },

    // Get booking form URL
    getBookingFormUrl: () => {
        return CONFIG.booking.formUrl;
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, ConfigHelper };
}
