const jsonLDGenerator = {
  home() {
    return [
      {
        "@context": "https://schema.org",
        "@type": ["Organization", "Place", "HinduTemple"],
        name: "Shri Dada Mota Shyam Ji Mandir",
        description:
          "Shri Dada Mota Shyam Ji Mandir is a Hindu temple located in Bharthal Village, Dwarka Sector 26, New Delhi, India.",
        image: "https://shridadamotashyammandir.in/og-image.jpg",
        url: "https://shridadamotashyammandir.in",
        logo: "https://shridadamotashyammandir.in/logo.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bharthal Village, Dwarka Sector 26",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110077",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.542444,
          longitude: 77.044667,
        },
        openingHours: "Mo-Su 04:00-22:00",
        sameAs: [
          "https://www.facebook.com/shridadamotashyammandir",
          "https://twitter.com/shridadamota",
          "https://www.youtube.com/@shridadamotashyammandirbha6012",
          "https://www.youtube.com/@Dadamotamandir",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          reviewCount: "968",
        },
        hasMap: "https://maps.app.goo.gl/QSc4MDCwrXS41v8k9",
        isAccessibleForFree: true,
        publicAccess: true,
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Parking",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Prayer Hall",
            value: true,
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://shridadamotashyammandir.in",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the temple timings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The temple is open daily from 04:00 AM to 10:00 PM (04:00-22:00) and full day on Sundays.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Shri Dada Mota Shyam Ji Mandir located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The temple is located in Bharthal Village, Dwarka Sector 26, New Delhi, Delhi 110075, India.",
            },
          },
          {
            "@type": "Question",
            name: "What are the main festivals celebrated at the temple?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The temple celebrates all major Hindu festivals including Janmashtami, Diwali, Holi, and special pujas during Navratri. The annual temple anniversary celebration is also a significant event.",
            },
          },
          {
            "@type": "Question",
            name: "Is parking available at the temple?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the temple has a dedicated parking area for devotees' vehicles. Additional street parking is also available nearby.",
            },
          },
          {
            "@type": "Question",
            name: "Is the temple accessible for free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the temple is open to the public and accessible for free. Donations are accepted for temple maintenance and charitable activities.",
            },
          },
        ],
      },
    ]
  },
}

export default jsonLDGenerator
