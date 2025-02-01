const mockMessages = [
    { id: 1, text: "Привет! Чем могу помочь?", sender: "bot", timestamp: "12:30", model: "GPT-4o" },
    { id: 2, text: "Как сделать API-запрос в JavaScript?", sender: "user", timestamp: "12:31", model: "GPT-4o"},
    { 
      id: 3, 
      text: "```javascript\nfetch('https://api.example.com')\n  .then(response => response.json())\n  .then(data => console.log(data));\n```\njjjjjjjjjjjjjjjjjjj", 
      sender: "bot", 
      timestamp: "12:32", 
      model: "GPT-4o" 
    },
    { id: 6, text: "Как сделать API-запрос в JavaScript?", sender: "user", timestamp: "12:31", model: "GPT-4o"},
    { 
      id: 4, 
      text: "- Купить хлеб\n- Купить молоко\n- Купить яйца", // Markdown-список
      sender: "bot", 
      timestamp: "28.01.2025 19:08:23 GMT+3", 
      model: "GPT-4o" 
    },
    { 
      id: 5, 
      text: "| Продукт  | Цена  |\n|----------|------|\n| Яблоки  | 100 руб. |\n| Бананы  | 80 руб. |", // Markdown-таблица
      sender: "bot", 
      timestamp: "12:34", 
      model: "GPT-4o" 
    }
  ];
  
  export default mockMessages;
