import os
from dotenv import load_dotenv, dotenv_values
from huggingface_hub import hf_hub_download

load_dotenv()

KEY = os.getenv("AI_KEY")
model_id = 'google-t5/t5-base'
filenames = [
    '.gitattributes', 
    'README.md', 
    'config.json', 
    'flax_model.msgpack',
    'generation_config.json',
    'model.safetensors',
    'pytorch_model.bin',
    'rust_model.ot',
    'spiece.model',
    'tf_model.h5',
    'tokenizer.json',
]

def download_model():
    for file in filenames:
        download_model_path = hf_hub_download(
            repo_id=model_id,
            filename=file,
            token=KEY,
        )