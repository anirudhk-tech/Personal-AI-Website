"""
File that searches the FAISS index based on query
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
"""

from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from ai_bot.dataset import *

transformer_modelPath = "sentence-transformers/all-MiniLM-l6-v2" # Defining information about transformer model for embedding
model_kwargs={'device': 'cpu'}
encode_kwargs = {'normalize_embeddings': True}
db = None # Initializing index of data
batch_size = 20 # Process 20 documents at a time

embeddings = HuggingFaceEmbeddings( # Creating embedding object for embedding
    model_name=transformer_modelPath,
    model_kwargs=model_kwargs,
    encode_kwargs=encode_kwargs,
)

def batching (data, batch_size): # Function to batch documents for efficient memory usage
    for x in range(0, len(data), batch_size):
        yield data[x: x + batch_size]

def search_faiss (query): # Search function that fetches relevant context
    finder = db.as_retriever(search_kwargs={"k": 5}) # Initializing retriever
    searchResult = finder.get_relevant_documents(query)
    return [searchResult[x].metadata["response"] for x in range(5)] # Returning top 5 results

for batch in batching(processed_data, batch_size):
    if not db:
        db = FAISS.from_documents(batch, embeddings) # Create index if not created yet
    else:
        db.add_documents(batch) # Add documents once index is created
  