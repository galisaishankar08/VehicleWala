# Vehiclewala

Vehiclewala is a chatbot application that recommends vehicles based on user preferences. The chatbot utilizes natural language processing and machine learning algorithms to analyze user queries and provide personalized vehicle recommendations. Additionally, all user interactions and conversations are securely stored in a database for future reference.

## Features:

- Chatbot interface for personalized vehicle recommendations.
- Natural language processing and machine learning-powered suggestions.
- Secure storage of user chats in a database.
- API integration with Slack SDK for sending messages.
- Prisma setup for database management, ensuring data integrity and scalability.
- MongoDB integration for efficient storage and retrieval of chatbot data.
- Protected endpoints to safeguard user interactions with external services.

## Technologies Used:

- Next.js
- Langchain JS
- Ollama2
- Nest.js
- Prisma
- MongoDB
- Slack SDK

## Installation:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Set up environment variables (e.g., MongoDB URI, Slack API token).
5. Start the development server: `npm run dev`

## Usage:

1. Access the chatbot interface by navigating to the appropriate URL.
2. Enter your queries or interests to receive personalized vehicle recommendations.
3. Utilize the Slack integration to send messages securely.
4. All user chats and interactions are stored securely in the database for future reference.

## Contribution:

Contributions to the project are welcome! Feel free to submit pull requests, suggest new features, or report issues.

## License:

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
