'''
File that converts the plain text into data that can be fed into the FAISS index
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
'''

from langchain.schema import Document
from transformers import pipeline

unprocessed_data = 'data_plain.txt' # Path to dataset
processed_data = []

def capitalize_first (sentence):
    if not sentence:
        return sentence
    return sentence[0].upper() + sentence[1:]

with open(unprocessed_data, 'r', errors='ignore') as file: # Reading dataset
    content = file.read()

qa_key = content.split('//') # // represents a new Q&A set in the data text

for qa in qa_key: 
    try: 
        qa.split('**')[1] # qa is an array of two objects; [question, answer]
    except: # Skipping those questions without an answer
        continue

    Qs, A = qa.split('**')[0], qa.split('**')[1] # Assigning question and answer to variables
    questions = Qs.split('<end>') # <end> represents the end of a question in the questions set
    answer = A[:-6].replace('â€™', "'") # Formatting the answer properly
    
    answer_list = answer.split('*') # * represents a new line in the data text
    new_sentences = [capitalize_first(sentence.strip()) for sentence in answer_list] # Captilizing and formatting answer
    answer = '*'.join(new_sentences).replace('*', '\n\n')

    data_instance = Document( # Creating document instance to feed to the QA algorithm
        page_content=str([str(q).lower().strip().replace("â€™", "'") for q in questions if str(q).strip() != '']), # Feeding algorithm possible questions
        metadata={
            'response': answer # Repsonse to correlating questions
        }
    )    

    processed_data.append(data_instance) # Adding instance to dataset
