"use server"
import { Ollama } from "@langchain/community/llms/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { OllamaFunctions } from "langchain/experimental/chat_models/ollama_functions";
import { PromptTemplate } from "@langchain/core/prompts";

const ollama = new OllamaFunctions({
    baseUrl: "http://127.0.0.1:11434",
    temperature: 1,
    model: "tinyllama",
  }).bind({
    functions: [
        {
          name: "Vehicle Recommendation",
          description: "Recommend a vehicle based on user preferences",
          parameters: {
            type: "object",
            properties: {
                vehicleName: {
                    type: "string",
                    description: "The name of the vehicle",
                },
                VehicleType: {
                    type: "string",
                    description: "The type of the vehicle",
                },
                VehicleBrand: {
                    type: "string",
                    description: "The brand of the vehicle",
                },
                VehicleDescription: {
                    type: "string",
                    description: "The description of the vehicle",
                },
                VehiclePrice: {
                    type: "string",
                    description: "The price of the vehicle",
                },
                VehicleSpecs: {
                    type: "string",
                    description: "The specs of the vehicle",
                },
                userPreference: {
                    type: "string",
                    description: "The user preference",
                },

            },
            required: ["vehicleName", "VehicleType", "VehicleBrand", "VehicleDescription", "VehiclePrice", "VehicleSpecs", "userPreference"],
          },
        },
      ],
    }
  );

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
