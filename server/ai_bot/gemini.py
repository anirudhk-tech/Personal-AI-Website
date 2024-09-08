"""
File that queries the gemini api with the query and context
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
"""

import os
import sys
from dotenv import load_dotenv, dotenv_values
import google.generativeai as genai
from langchain_query import search_faiss


load_dotenv()

genai.configure(api_key=os.getenv("AI_KEY")) # Create and configure the model

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 1000,
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
while query != "exit":
  query = input("What would you like to know?\n")
  context = search_faiss(query) # Find context from dataset based on query

  response = chat_session.send_message(f"Summarize this in a creative way: {context}")

  print(response.text)
