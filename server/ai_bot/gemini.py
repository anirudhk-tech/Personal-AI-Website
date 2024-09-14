"""
File that queries the gemini api with the query and context
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
"""

import os
import sys
from dotenv import load_dotenv, dotenv_values
import google.generativeai as genai
from ai_bot.langchain_query import search_faiss


load_dotenv()

genai.configure(api_key=os.getenv("AI_KEY")) # Create and configure the model

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 100,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[
  ]
)

query = ""

def ask_ai (query):
  context = search_faiss(query) # Find context from dataset based on query
  common_punc = ['.', '?', '!']

  response = chat_session.send_message(f"Answer the following question thoroughly: {query} using this context: {context}. Respond as if you're talking from your own knowledge instead of a provided context. In your response, don't mention that you derived the answer from a context. And don't bold anything.")


  if response.text[-1] not in common_punc:
    response_list = response.text.split(".")
  
    if len(response_list) != 1:
      response_list.pop()

    response = ".".join(response_list) + "."
  else:
    response = response.text
  
  response = response.replace('*', '')


  return response
    
