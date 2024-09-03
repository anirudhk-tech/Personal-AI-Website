from gpt_config import download_model
from gpt import answer

download_model()

query = ''

while query != 'exit':
    query = input("\n\nAsk me something\n")
    response = answer(query)
    print('\n\n\n'+response+'\n\n\n')