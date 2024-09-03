from langchain.schema import Document
from transformers import pipeline

unprocessed_data = 'data_plain.txt' # Path to dataset
processed_data = [] # Initializing processed data array

def capitalize_first (sentence):
    if not sentence:
        return sentence
    return sentence[0].upper() + sentence[1:]

with open(unprocessed_data, 'r', errors='ignore') as file: # Reading dataset
    content = file.read()

qa_key = content.split('//') # Splitting data based on predetermined seperator used while creating it

for qa in qa_key: # Iterating through the dataset of Q&As
    try: # Checking for any data instance that does not have an answer, skipping those
        qa.split('**')[1]
    except:
        continue

    Qs, A = qa.split('**')[0], qa.split('**')[1] # Splitting questions and answer based on predetermined seperater
    questions = Qs.split('<end>') # Splitting each indvidual question based on predetermined seperator
    answer = A[:-6].replace('â€™', "'") # Taking out '<end>' from answer and formatting properly
    
    answer_list = answer.split('*') # Captilizing each sentence in answer
    new_sentences = [capitalize_first(sentence.strip()) for sentence in answer_list]
    answer = '*'.join(new_sentences).replace('*', '\n\n')

    for q in questions:
        print(q)

    data_instance = Document( # Creating document instance to feed to the QA algorithm
        page_content=str([str(q).lower().strip().replace("â€™", "'") for q in questions if str(q).strip() != '']), # Feeding algorithm possible questions
        metadata={
            'response': answer # Repsonse to correlating questions
        }
    )    

    processed_data.append(data_instance) # Adding instance to dataset
