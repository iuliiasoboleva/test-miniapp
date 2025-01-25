const plans = [
    {
      name: "Basic",
      tokens: [0, 300],
      description: ["Feature 1", "Feature 2", "Feature 3"],
      price: { rub: 1000, eur: 10, usd: 12 },
      dynamicPrices: {
        0: { rub: 1000, eur: 10, usd: 12 },
        300: { rub: 1200, eur: 12, usd: 14 },
      },
      discount: "10% off for annual billing",
    },
    {
      name: "Pro",
      tokens: [0, 500],
      description: ["Feature A", "Feature B", "Feature C"],
      price: { rub: 2000, eur: 20, usd: 24 },
      dynamicPrices: {
        0: { rub: 2000, eur: 20, usd: 24 },
        500: { rub: 2500, eur: 25, usd: 30 },
      },
      discount: "15% off for annual billing",
    },
    {
      name: "Premium",
      tokens: [0, 800],
      description: ["Feature X", "Feature Y", "Feature Z"],
      price: { rub: 3000, eur: 30, usd: 36 },
      dynamicPrices: {
        0: { rub: 3000, eur: 30, usd: 36 },
        800: { rub: 4000, eur: 40, usd: 48 },
      },
      discount: "20% off for annual billing",
    },
  ];
  
  export default plans;
  