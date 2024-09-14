"""
File that searches the FAISS index based on query
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
"""

from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from ai_bot.dataset import *

transformer_modelPath = "sentence-transformers/all-MiniLM-l6-v2" # Defining information about transformer model for embedding
model_kwargs={'device': 'cpu'}
encode_kwargs = {'normalize_embeddings': False}

embeddings = HuggingFaceEmbeddings( # Creating embedding object for embedding
    model_name=transformer_modelPath,
    model_kwargs=model_kwargs,
    encode_kwargs=encode_kwargs,
)

db = FAISS.from_documents(processed_data, embeddings) # Initializing index of data
finder = db.as_retriever(search_kwargs={"k": 5}) # Initializing retriever

def search_faiss (query): # Search function that fetches relevant context
    searchResult = finder.get_relevant_documents(query)

    return [searchResult[x].metadata["response"] for x in range(5)] # Returning top 5 results
  