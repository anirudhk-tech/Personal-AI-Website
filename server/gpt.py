from langchain_query import search_faiss
from transformers import T5Tokenizer, T5ForConditionalGeneration, pipeline
import random

model_id = 'google-t5/t5-base'
tokenizer = T5Tokenizer.from_pretrained(model_id, legacy=False, clean_up_tokenization_spaces=False) #Defining information about model for generating text
model = T5ForConditionalGeneration.from_pretrained(model_id)
token_ratio = 201/806

answer_bot = pipeline( # Creating model to answer questions
    "summarization", 
    model=model, 
    device=-1, 
    tokenizer=tokenizer, 
    truncation=True,
    max_length=400
)

def answer (query):
    context = search_faiss(query)
    answer = answer_bot(
        context, 
        do_sample=False,
    )
    formatted_answer = formatter(answer[0]['summary_text'])
    return formatted_answer

def formatter (summary):
    summary_list = summary.split('.')
    new_summary = ""
    for sentence in summary_list:
        new_sentence = sentence.strip()
        if new_sentence == '':
            continue
        new_sentence = new_sentence[0].upper() + new_sentence[1:]
        if not summary_list[0] == sentence:
            new_summary += f'. {new_sentence}'
        else:
            new_summary += new_sentence 

    return new_summary + random.choice(['.', '!'])