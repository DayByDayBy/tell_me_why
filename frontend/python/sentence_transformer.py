from sentence_transformers import SentenceTransformer, util
import numpy as np
import pandas as pd
import torch

model = SentenceTransformer('all-MiniLM-L6-v2')

sentences = [
    
    
    "The idea of using quantum entanglement for communication is often referred to as 'Quantum Teleportation' or 'Entanglement-Based Quantum Communication.' Essentially, it proposes that if two particles are entangled, you could use the connection between them to transmit information from one particle to another, regardless of distance.\n\nImagine being able to send a message to someone on the other side of the universe, and having it arrive instantly. This would allow for near-instant communication across vast distances, potentially revolutionizing our understanding of space and time!",
    "The concept I was referring to is often called Quantum Non-Locality or Quantum Instant Messaging. It proposes that if two particles are entangled, any information encoded on one particle would instantly be reflected on the other particle, regardless of distance. This means that if someone were to send a message using this method, it would theoretically arrive at its destination simultaneously with the sending, effectively allowing for near-instant communication across vast distances.\n\nThis idea has sparked significant interest in the scientific community and has been explored through various experiments. While we have not yet achieved practical implementation, the potential implications are profound. It could revolutionize our understanding of space and time, enabling faster-than-light communication that would allow us to better understand phenomena such as black holes, dark matter, and the origins of the universe.",
]

embeddings = model.encode(sentences, convert_to_tensor=True)

embeddings = embeddings.cpu()


# Compute cosine similarity between all pairs
cosine_similarities = util.pytorch_cos_sim(embeddings, embeddings).numpy()

data = {
    'Sentence': sentences,
    'Similarity to Original Sentence': [cosine_similarities[0][i] for i in range(len(sentences))],
    'Similarity to Previous Sentence': [cosine_similarities[i-1][i] if i != 0 else 1.0 for i in range(len(sentences))]
}


df = pd.DataFrame(data)
df.to_csv('sentence_similarities.csv', index=True)
print(df)









# def print_similarities(cosine_similarities, sentences):
#     for i in range(len(sentences)):
#         for j in range(i + 1, len(sentences)):
#             print(f"Similarity between sentence {i + 1} and sentence {j + 1}: {cosine_similarities[i][j]:.4f}")
# print_similarities(cosine_similarities, sentences)
