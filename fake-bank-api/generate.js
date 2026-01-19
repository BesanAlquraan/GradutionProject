const fs = require("fs");

// أسماء عربية
const names = [
  "أحمد محمد", "محمد علي", "سارة أحمد", "لينا خالد", "عبدالله يوسف",
  "نور حسين", "رامي سامر", "ميساء عمر", "خالد فادي", "هبة محمود",
  "عمر زيد", "آية حسن", "ياسمين طارق", "سيف الدين", "دانا إياد"
];

const users = [];
const accounts = [];
const cards = [];
const transactions = [];
const transfers = [];

let transactionId = 1;
let transferId = 1;

for (let i = 1; i <= 100; i++) {
  const userId = `u${i}`;
  const name = names[Math.floor(Math.random() * names.length)];

  // 👤 USER
  users.push({
    
    id: userId,
    fullName: name,
    email: `user${i}@bank.com`,
    phone: `079${Math.floor(1000000 + Math.random() * 9000000)}`,
    role: "customer",
    createdAt: "2026-01-01"
  });

  // 🏦 ACCOUNTS
  const accJOD = `a${i}j`;
  const accUSD = `a${i}u`;

  accounts.push(
    {
      id: accJOD,
      userId,
      accountNumber: `${10000000 + i}`, // JOD يبدأ من 10000001
      type: "Savings",
      balance: Math.floor(Math.random() * 5000),
      currency: "JOD",
      status: "active"
    },
    {
      id: accUSD,
      userId,
      accountNumber: `${20000000 + i}`, // USD يبدأ من 20000001
      type: "Current",
      balance: Math.floor(Math.random() * 3000),
      currency: "USD",
      status: "active"
    }
  );

  // 💳 CARDS (2 لكل مستخدم)
  cards.push(
    {
      id: `c${i}d`,
      accountId: accJOD,
      cardNumber: `411111111111${1000 + i}`,
      expiry: "12/28",
      type: "Debit",
      status: "active"
    },
    {
      id: `c${i}c`,
      accountId: accUSD,
      cardNumber: `550000000000${1000 + i}`,
      expiry: "11/29",
      type: "Credit",
      status: "active"
    }
  );

  // 💸 TRANSACTIONS (10 لكل حساب)
  for (let t = 0; t < 10; t++) {
    transactions.push({
      id: `t${transactionId++}`,
      accountId: accJOD,
      amount: -Math.floor(Math.random() * 150),
      transactionType: "expense",
      category: ["Food", "Transport", "Shopping"][Math.floor(Math.random() * 3)],
      currency: "JOD",
      date: "2026-01-03"
    });

    transactions.push({
      id: `t${transactionId++}`,
      accountId: accUSD,
      amount: Math.floor(Math.random() * 500),
      transactionType: "income",
      category: "Salary",
      currency: "USD",
      date: "2026-01-02"
    });
  }
}

// 🔁 TRANSFERS بين مستخدمين
for (let i = 1; i <= 50; i++) {
  const fromUser = Math.floor(Math.random() * 100) + 1;
  let toUser = Math.floor(Math.random() * 100) + 1;
  while (toUser === fromUser) toUser++;

  transfers.push({
    id: `tr${transferId++}`,
    fromAccountId: `a${fromUser}j`,
    toAccountId: `a${toUser}j`,
    amount: Math.floor(Math.random() * 300),
    currency: "JOD",
    status: "completed",
    date: "2026-01-04"
  });
}

// 💱 EXCHANGE RATES
const exchange_rates = [
  { from: "JOD", to: "USD", rate: 1.41 },
  { from: "USD", to: "JOD", rate: 0.71 }
];

// 📦 DB
const db = {
  bankName: "Secure Bank",
  users,
  accounts,
  cards,
  transactions,
  transfers,
  exchange_rates
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
console.log("✅ Fake bank database generated successfully");
