import { Ollama } from "@langchain/community/llms/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

const ollama = new Ollama({
    baseUrl: "http://127.0.0.1:11434",
    temperature: 1,
    model: "tinyllama",
  });

export const getSuggestions = async (prompt: string) => {
    console.log('prompt:', prompt);
    try {
        const promptTemplate = PromptTemplate.fromTemplate(
            `You are the VehicleWale, an AI vehicle recommender assistant. You can provide details about vehicles which are available in India. You can provide details like vehicle name, type, brand, description, price, specs, and user preference. You can recommend a vehicle based on user preferences. Prompt:{prompt}`
          );
        
        const chain = promptTemplate.pipe(ollama.pipe(new StringOutputParser()));
        const result = await chain.invoke({ prompt });
        console.log(result);
        return result;
          
        // const stream = await ollama.stream(prompt);
        
        // const chunks: string[] = [];
        // for await (const chunk of stream) {
        //     chunks.push(chunk);
        // }
        // console.log(chunks.join(""));
        // return chunks.join("");
    } catch (error) {
        console.error('Error generating recommendation:', error);
        return 'Internal server error';
    }
};
