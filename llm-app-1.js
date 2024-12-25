import dotenv from 'dotenv';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage,SystemMessage } from "@langchain/core/messages";

// Load environment variables from .env file
dotenv.config();

const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
});
const messages = [
    new SystemMessage("Translate the following from English into Italian"),
    new HumanMessage("hi!"),
  ];
  
   const result = await model.invoke(messages);
   console.log(result);