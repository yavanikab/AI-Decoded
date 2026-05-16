# TERMS CATALOG — AI Demystified

**Version:** 1.0  
**Date:** 2026-05-07  
**Status:** DRAFT — pending review and approval  

> Master inventory of all AI terms organised by category. Each term will become one entry in `terms.json`.
> Review and edit this file. Add new terms, remove irrelevant ones, or move terms between categories.
> Once finalised, terms are transferred to `terms.json` for the application.

---

## How to Use This Catalog

- **Categories (15):** Each term belongs to exactly one category. Category names are descriptive — you should know which category a term lives in without thinking.
- **Difficulty:** Each term has a level: `beginner` (intro), `intermediate` (mid), or `advanced` (adv).
- **Adding a term:** Write a new row in the appropriate category table. Keep the definition to one line.
- **Removing a term:** Delete the row.
- **Moving a term:** Cut the row to a different category table.
- **New categories:** If a term truly doesn't fit anywhere, suggest a new category (but keep total under 20).

---

## Category 1 — AI Basics (20 terms)

*"Start here. Understand what AI actually means."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Artificial Intelligence (AI) | beginner | The broad field of creating machines that can perform tasks that normally require human intelligence |
| 2 | Machine Learning (ML) | beginner | A subset of AI where systems learn patterns from data instead of being explicitly programmed |
| 3 | Deep Learning (DL) | beginner | A subset of ML using multi-layered neural networks to learn complex patterns |
| 4 | Model | beginner | The output of training — a mathematical representation that can make predictions or generate text |
| 5 | Algorithm | beginner | A step-by-step set of instructions that tells a computer how to solve a problem |
| 6 | Inference | beginner | When a trained model runs on new input to produce an output (prediction, text, image) |
| 7 | Parameter | beginner | A value inside a model that is learned during training and determines how the model behaves |
| 8 | Training | beginner | The process of teaching a model by showing it examples and adjusting its parameters |
| 9 | Dataset | beginner | A collection of examples used to train, validate, or test a model |
| 10 | Feature | intermediate | An individual measurable input variable used by a model to make predictions |
| 11 | Label | beginner | The correct answer or target value that a supervised model learns to predict |
| 12 | Supervised Learning | beginner | Training where the model learns from input-output pairs (labeled data) |
| 13 | Unsupervised Learning | beginner | Training where the model finds patterns in data without any labels |
| 14 | Reinforcement Learning | intermediate | Training where an agent learns by taking actions and receiving rewards or penalties |
| 15 | Classification | beginner | A task where the model predicts which category something belongs to |
| 16 | Regression | beginner | A task where the model predicts a numerical value |
| 17 | Overfitting | intermediate | When a model memorises training data instead of learning general patterns, performing poorly on new data |
| 18 | Generalisation | intermediate | A model's ability to perform well on data it has never seen before |
| 19 | Narrow AI | beginner | AI that is designed to perform one specific task (most AI today is narrow) |
| 20 | Artificial General Intelligence (AGI) | beginner | Hypothetical AI that can perform any intellectual task a human can |

---

## Category 2 — Neural Networks (22 terms)

*"The brain-inspired architecture behind modern AI."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Neural Network | beginner | A computing system inspired by the human brain, made of connected layers of artificial neurons |
| 2 | Neuron | intermediate | A single computational unit in a neural network that receives input, processes it, and passes output |
| 3 | Layer | intermediate | A collection of neurons that process data together, forming one stage of a neural network |
| 4 | Input Layer | beginner | The first layer of a neural network that receives the raw data |
| 5 | Hidden Layer | intermediate | A layer between input and output where the network learns patterns no human directly designs |
| 6 | Output Layer | beginner | The final layer that produces the network's prediction or answer |
| 7 | Weight | intermediate | A learnable number that determines how much influence one neuron's output has on the next neuron |
| 8 | Bias | intermediate | A learnable offset added to a neuron's calculation that helps the network fit the data better |
| 9 | Activation Function | intermediate | A mathematical function that decides whether a neuron should "fire" based on its input |
| 10 | ReLU | intermediate | The most common activation function — outputs the input directly if positive, zero otherwise |
| 11 | Sigmoid | intermediate | An activation function that squashes values between 0 and 1, useful for probabilities |
| 12 | Softmax | intermediate | An activation function that converts raw scores into probabilities that sum to 1 |
| 13 | Forward Pass | intermediate | The process of passing input data through a network from input to output |
| 14 | Backpropagation | advanced | The algorithm that calculates how much each weight contributed to the error so they can be adjusted |
| 15 | Loss Function | intermediate | A mathematical function that measures how wrong the model's predictions are |
| 16 | Gradient Descent | intermediate | An optimisation algorithm that repeatedly adjusts weights to reduce the loss |
| 17 | Learning Rate | intermediate | A hyperparameter that controls how big each adjustment step is during training |
| 18 | Epoch | beginner | One complete pass through the entire training dataset during training |
| 19 | Batch | beginner | A subset of the training data processed together in one forward/backward pass |
| 20 | Dropout | intermediate | A technique that randomly turns off some neurons during training to prevent overfitting |
| 21 | CNN (Convolutional Neural Network) | intermediate | A neural network architecture designed for grid-like data (images) using convolutional filters to detect patterns |
| 22 | RNN / LSTM | intermediate | Recurrent neural network architectures designed for sequential data, using internal state to process sequences |

---

## Category 3 — Transformers (17 terms)

*"The architecture that changed everything."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Transformer | beginner | A neural network architecture introduced in 2017 that processes all input tokens in parallel using attention |
| 2 | Attention | intermediate | A mechanism that allows the model to focus on relevant parts of the input when processing each token |
| 3 | Self-Attention | intermediate | Attention where each token in a sequence attends to every other token in the same sequence |
| 4 | Multi-Head Attention | advanced | Running multiple attention operations in parallel so the model can capture different types of relationships |
| 5 | Query (Q) | advanced | A vector representing what the current token is "looking for" |
| 6 | Key (K) | advanced | A vector representing what each token "offers" — matched against queries to find relevance |
| 7 | Value (V) | advanced | A vector representing the actual content of each token that gets weighted by attention scores |
| 8 | QKV (Query-Key-Value) | advanced | The three matrices that self-attention uses to compute relationships between tokens |
| 9 | Positional Encoding | intermediate | A technique that gives the model information about the position of each token in the sequence |
| 10 | Encoder | intermediate | The part of a transformer that reads and understands the input sequence |
| 11 | Decoder | intermediate | The part of a transformer that generates output step by step |
| 12 | Encoder-Decoder Attention | advanced | Attention in the decoder that looks at the encoder's output to understand the input context |
| 13 | Masked Self-Attention | advanced | Self-attention where future tokens are hidden so the decoder cannot peek ahead during generation |
| 14 | Logits | intermediate | The raw scores output by the model before they are converted into probabilities |
| 15 | Layer Normalisation | intermediate | A technique that stabilises training by normalising values across each layer |
| 16 | Residual Connection | intermediate | A shortcut that adds a layer's input to its output, helping gradients flow through deep networks |
| 17 | Feed-Forward Network (FFN) | advanced | A simple two-layer network within each transformer block that processes each token independently |

---

## Category 4 — Training & Data (37 terms)

*"How models learn from examples and how we measure their progress."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Training Set | beginner | The portion of data used to teach the model by adjusting its parameters |
| 2 | Validation Set | intermediate | A separate data portion used to evaluate the model during training and tune hyperparameters |
| 3 | Test Set | beginner | A held-out data portion used only at the end to measure final performance |
| 4 | Train/Val/Test Split | beginner | The practice of dividing data into three distinct sets for different stages of model development |
| 5 | Cross-Validation | intermediate | A technique that rotates which data is used for training vs validation to get more reliable metrics |
| 6 | Data Augmentation | intermediate | Creating modified versions of training data (rotations, crops, synonyms) to improve model robustness |
| 7 | Loss Curve | intermediate | A graph showing how the loss decreases over training steps — reveals whether the model is learning |
| 8 | Convergence | intermediate | The point during training when the loss stops decreasing significantly |
| 9 | Underfitting | intermediate | When a model is too simple to learn the patterns in the data (high training loss) |
| 10 | Optimiser | intermediate | The algorithm that decides how to update weights based on the gradient (e.g., Adam, SGD) |
| 11 | SGD (Stochastic Gradient Descent) | intermediate | The simplest optimiser — updates weights using one random batch at a time |
| 12 | Adam | intermediate | The most popular optimiser — adapts the learning rate for each parameter automatically |
| 13 | Scheduler | intermediate | A component that changes the learning rate during training according to a planned schedule |
| 14 | Early Stopping | intermediate | A technique that stops training when validation performance stops improving to prevent overfitting |
| 15 | Regularisation | intermediate | Any technique that prevents overfitting by adding constraints to the model |
| 16 | Gradient Clipping | advanced | A technique that caps gradient values during backpropagation to prevent exploding gradients |
| 17 | Checkpoint | beginner | A saved snapshot of the model's weights at a specific point during training |
| 18 | Resume Training | beginner | Continuing training from a saved checkpoint instead of starting from scratch |
| 19 | Hyperparameter | intermediate | A configuration setting chosen before training (learning rate, batch size, layer count) |
| 20 | Hyperparameter Tuning | intermediate | The process of trying different hyperparameter values to find the best combination |
| 21 | Evaluation | intermediate | Measuring how well a fine-tuned model performs using benchmarks and metrics |
| 22 | Benchmark | intermediate | A standardised test dataset used to compare model performance (e.g., MMLU, HumanEval) |
| 23 | Perplexity | intermediate | A metric that measures how "surprised" a model is by a text — lower is better |
| 24 | BLEU | intermediate | A metric for evaluating machine translation by comparing to human translations |
| 25 | ROUGE | intermediate | A metric for evaluating text summarisation by comparing n-gram overlap |
| 26 | Model Distillation | advanced | Training a smaller model to mimic a larger model's behaviour, making it faster and cheaper |
| 27 | Inference Engine | intermediate | The software runtime that loads a model and serves predictions, handling batching and optimisation |
| 28 | Eval | beginner | A structured test used to measure whether an AI system performs a task correctly |
| 29 | Evaluation Dataset | intermediate | A set of examples reserved for measuring model or application quality |
| 30 | Golden Dataset | intermediate | A high-quality reference dataset with trusted expected answers used for evaluation |
| 31 | LLM-as-Judge | intermediate | Using a language model to grade or compare another model's outputs |
| 32 | Groundedness | intermediate | Whether an AI answer is supported by the provided source material |
| 33 | Faithfulness | intermediate | Whether a generated answer accurately reflects the source content without adding unsupported claims |
| 34 | Relevance | beginner | Whether an AI answer directly addresses the user's question or task |
| 35 | Factuality | intermediate | Whether statements in an AI output are true and verifiable |
| 36 | Regression Test | intermediate | A repeatable test that checks whether a change broke behavior that previously worked |
| 37 | Human Evaluation | intermediate | Quality assessment performed by people rather than automated metrics alone |

---

## Category 5 — LLMs (18 terms)

*"Large Language Models — the technology behind ChatGPT and friends."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Large Language Model (LLM) | beginner | A massive neural network trained on huge amounts of text that can generate and understand human language |
| 2 | GPT (Generative Pre-trained Transformer) | beginner | OpenAI's family of decoder-only transformer models that power ChatGPT and many other AI applications, capable of generating human-like text |
| 3 | Foundation Model | intermediate | A very large model trained on broad data that can be adapted to many different tasks |
| 4 | Generative AI | beginner | AI that creates new content (text, images, audio) rather than just analysing existing data |
| 5 | Tokens | beginner | The small text fragments (words, parts of words, punctuation) that an AI reads and writes in |
| 6 | Completion | beginner | The text generated by an LLM in response to a prompt |
| 7 | Temperature | beginner | A setting that controls randomness — low temperature = predictable, high temperature = creative |
| 8 | Top-K Sampling | intermediate | A setting that limits the model to choosing from the K most likely next tokens only |
| 9 | Top-P Sampling (Nucleus Sampling) | intermediate | A setting that limits the model to choosing from the smallest set of tokens whose combined probability exceeds P |
| 10 | Hallucination | beginner | When an AI model generates confident-sounding but completely false information |
| 11 | Next Token Prediction | intermediate | The fundamental task of an LLM — predicting the most likely next token given all previous tokens |
| 12 | Causal LM | intermediate | A language model that can only look at past tokens when predicting the next token (used for generation) |
| 13 | Base Model vs Chat Model | intermediate | A base model predicts text; a chat model has been fine-tuned for conversation |
| 14 | Context Window | beginner | The maximum number of tokens a model can process at once — its "working memory" |
| 15 | Max Tokens | beginner | The maximum number of tokens a model is allowed to generate in a single response |
| 16 | Stop Sequence | intermediate | A token or phrase that tells the model to stop generating (e.g., "\\n\\n" or a special end token) |
| 17 | Beam Search | intermediate | A decoding strategy that keeps track of multiple candidate sequences at each step to find the most likely output |
| 18 | Greedy Decoding | intermediate | A decoding strategy that selects the single most likely next token at each step, trading optimality for speed |

---

## Category 6 — Prompting (17 terms)

*"How to tell an AI what you want and get good results."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Prompt | beginner | The text input you give to an AI model to tell it what you want |
| 2 | Prompt Engineering | beginner | The practice of crafting and refining prompts to get better, more reliable outputs |
| 3 | Chain of Thought (CoT) | intermediate | Prompting the model to think step by step before answering, improving reasoning |
| 4 | Tree of Thought (ToT) | advanced | Prompting the model to explore multiple reasoning paths simultaneously and pick the best one |
| 5 | Prompt Chaining | intermediate | Breaking a complex task into a sequence of smaller prompts, each building on the previous |
| 6 | Structured Output | intermediate | Asking the model to return data in a specific format like JSON or markdown |
| 7 | System Prompt | beginner | A special initial instruction that sets the model's role, personality, and constraints |
| 8 | User Prompt | beginner | The actual request or question from the user, following the system prompt |
| 9 | Persona | beginner | Assigning the AI a character or role in the prompt to shape its responses |
| 10 | Negative Prompt | intermediate | Telling the model what NOT to do or include in its response |
| 11 | Prompt Template | intermediate | A reusable prompt structure with placeholders that get filled with specific content |
| 12 | Few-shot Prompting | intermediate | Including a few examples in the prompt to demonstrate the desired output format |
| 13 | Zero-shot Prompting | intermediate | Asking the model to perform a task without providing any examples |
| 14 | Prompt Injection | intermediate | A security attack where someone crafts input to override the system prompt and change the model's behaviour |
| 15 | Jailbreaking | advanced | Using creative prompts to bypass an AI's safety restrictions |
| 16 | Frequency Penalty | intermediate | A setting that reduces the likelihood of the model repeating the same phrases |
| 17 | Presence Penalty | intermediate | A setting that encourages the model to talk about new topics that haven't appeared yet |

---

## Category 7 — Embeddings (17 terms)

*"Turning words, images, and concepts into numbers that computers can compare."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Embedding | beginner | A numerical vector representation of a word, sentence, or image that captures its meaning |
| 2 | Vector | beginner | An ordered list of numbers that represents a point in multi-dimensional space |
| 3 | Vector Space | intermediate | A mathematical space where every point represents a concept, and similar concepts are near each other |
| 4 | Dimension | intermediate | One axis of a vector — higher dimensions capture more nuanced meaning |
| 5 | Cosine Similarity | intermediate | A measure of how similar two vectors are based on the angle between them |
| 6 | Euclidean Distance | intermediate | The straight-line distance between two vectors in vector space |
| 7 | Dot Product | advanced | A mathematical operation on two vectors that produces a single number measuring their alignment |
| 8 | Nearest Neighbour | intermediate | Finding the vector closest to a given vector — used for semantic search |
| 9 | Semantic Search | intermediate | Search that understands meaning and intent, not just keyword matching |
| 10 | Embedding Model | beginner | A model specifically trained to convert text into meaningful vector representations |
| 11 | Text Embedding | beginner | An embedding vector created from a piece of text (word, sentence, paragraph) |
| 12 | Image Embedding | intermediate | An embedding vector created from an image, capturing its visual content |
| 13 | Cross-Modal Embedding | advanced | Embeddings that can relate different types of data (e.g., matching text descriptions to images) |
| 14 | Sparse vs Dense Vectors | intermediate | Sparse vectors mostly contain zeros; dense vectors are full — dense captures richer meaning |
| 15 | Dimensionality Reduction | advanced | Techniques like PCA or t-SNE that compress high-dimensional vectors to 2D/3D for visualisation |
| 16 | Latent Space | intermediate | The abstract multi-dimensional space where a model's internal representations live |
| 17 | Word2Vec | intermediate | A foundational embedding model that learns word vectors by predicting surrounding words in a sliding window |

---

## Category 8 — RAG (Retrieval-Augmented Generation) (24 terms)

*"Making AI answers more accurate by letting it look up facts."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | RAG (Retrieval-Augmented Generation) | beginner | A technique where an AI model searches a knowledge base before answering to improve accuracy |
| 2 | Chunking | intermediate | Splitting large documents into smaller pieces before storing for retrieval |
| 3 | Chunk Strategy | intermediate | How you decide where to split documents (by sentence, paragraph, token count, or semantic boundary) |
| 4 | Retrieval | beginner | The step in RAG where relevant documents are fetched from a knowledge base |
| 5 | Generator | intermediate | The LLM that produces the final answer using both the prompt and the retrieved documents |
| 6 | Knowledge Base | beginner | A collection of documents or data that the RAG system searches through |
| 7 | Vector Database | intermediate | A database optimised for storing and searching vector embeddings at scale |
| 8 | Query (in RAG) | beginner | The user's question, which is converted to an embedding and used to search the knowledge base |
| 9 | Document | beginner | A single piece of content stored in the knowledge base (paragraph, page, file) |
| 10 | BM25 | intermediate | A classic keyword-based ranking algorithm that scores documents by term frequency and document length |
| 11 | Hybrid Search | intermediate | Combining keyword search (BM25) with semantic search (vector) for better results |
| 12 | Reranking | intermediate | A second pass that re-sorts retrieved documents to put the most relevant ones first |
| 13 | Metadata Filter | intermediate | Filtering search results by attributes like date, author, or category before ranking |
| 14 | Source Citation | beginner | Showing the source documents that the AI used to generate its answer |
| 15 | Contextual Retrieval | advanced | Including surrounding context with each chunk so the AI understands it better |
| 16 | Graph RAG | advanced | RAG that uses a knowledge graph structure to capture relationships between concepts |
| 17 | Agentic RAG | advanced | RAG where an agent decides when to retrieve, what to retrieve, and how to use the results |
| 18 | Recall@K | advanced | A retrieval metric measuring whether relevant documents appear in the top K results |
| 19 | Precision@K | advanced | A retrieval metric measuring how many of the top K results are actually relevant |
| 20 | Top-K Retrieval | intermediate | Fetching the K highest-scoring documents or chunks for a query |
| 21 | Query Expansion | intermediate | Rewriting or broadening a user query to retrieve more relevant documents |
| 22 | Citation Grounding | intermediate | Connecting generated claims to the specific retrieved sources that support them |
| 23 | Embedding Drift | advanced | When embedding behavior changes over time, making older indexes less reliable |
| 24 | Indexing Pipeline | intermediate | The process that prepares documents for retrieval by parsing, chunking, embedding, and storing them |

---

## Category 9 — Fine-tuning (23 terms)

*"Customising a pre-trained model for your specific use case."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Fine-tuning | beginner | Taking a pre-trained model and training it further on your own data to specialise it |
| 2 | Transfer Learning | intermediate | Using knowledge learned from one task as a starting point for learning a related task |
| 3 | SFT (Supervised Fine-Tuning) | intermediate | The most common form of fine-tuning where a pre-trained model is trained on labelled input-output pairs |
| 4 | LoRA (Low-Rank Adaptation) | advanced | A technique that fine-tunes a model by training small adapter matrices instead of all weights |
| 5 | QLoRA | advanced | LoRA combined with quantisation so fine-tuning fits on consumer GPUs |
| 6 | Adapter | advanced | A small trainable module inserted into a model, allowing fine-tuning without changing original weights |
| 7 | PEFT (Parameter-Efficient Fine-Tuning) | intermediate | A family of techniques (LoRA, adapters, prefixes) that fine-tune with minimal parameter changes |
| 8 | Full Fine-tune | intermediate | Fine-tuning where all the model's parameters are updated — most expensive but most powerful |
| 9 | Instruction Tuning | intermediate | Fine-tuning a model on instruction-response pairs so it follows directions reliably |
| 10 | RLHF (Reinforcement Learning from Human Feedback) | advanced | Training that uses human preferences as rewards to align model outputs with what people want |
| 11 | Preference Tuning | advanced | Fine-tuning that teaches a model which outputs are preferred by humans |
| 12 | DPO (Direct Preference Optimization) | advanced | A simpler alternative to RLHF that aligns models directly from preference data |
| 13 | Catastrophic Forgetting | intermediate | When a model forgets previously learned knowledge after being fine-tuned on new data |
| 14 | Quantization | advanced | Reducing the precision of model weights to make models smaller and faster with minimal quality loss |
| 15 | Open Weights | beginner | Model weights that are publicly available for download, inspection, or local use |
| 16 | Model Weights | beginner | The learned numerical parameters that determine a model's behavior |
| 17 | GGUF | advanced | A file format commonly used to run quantized language models locally |
| 18 | ONNX | advanced | An open format for representing machine learning models across frameworks and runtimes |
| 19 | Quantized Model | intermediate | A model whose weights use lower numerical precision to reduce memory and compute requirements |
| 20 | Inference Server | intermediate | A service that hosts a model and handles prediction or generation requests |
| 21 | vLLM | advanced | An inference engine optimized for serving large language models efficiently |
| 22 | Ollama | beginner | A local runtime and command-line tool for running open language models on personal machines |
| 23 | LoRA Adapter Merge | advanced | Combining a trained LoRA adapter into a base model's weights for deployment |

---

## Category 10 — APIs & Integration (28 terms)

*"Calling AI from your own code — the practical stuff."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | API (Application Programming Interface) | beginner | A way for one piece of software to talk to another — in AI, it's how you send prompts and get responses |
| 2 | API Endpoint | beginner | The specific URL where an API can be accessed |
| 3 | API Key | beginner | A secret token used to authenticate your requests to an API |
| 4 | SDK (Software Development Kit) | beginner | A package of code that makes it easier to call an API from your programming language |
| 5 | Rate Limiting | beginner | An API restriction on how many requests you can make in a given time period |
| 6 | Streaming | intermediate | Receiving API responses token by token as they are generated, instead of waiting for the full response |
| 7 | REST API | beginner | The most common API style — uses standard HTTP methods (GET, POST) and returns JSON |
| 8 | Latency | beginner | The time delay between sending a request and receiving the response |
| 9 | Throughput | intermediate | The number of requests a system can handle in a given time period |
| 10 | Cost (per token) | beginner | Most AI APIs charge per token for both input and output |
| 11 | Model Selection | beginner | Choosing which model to use for a specific task (trade-off between capability and cost) |
| 12 | Fallback | intermediate | Automatically switching to a different model or approach when the primary one fails |
| 13 | Retry | intermediate | Automatically re-sending a request that failed due to a transient error, often with exponential backoff strategies |
| 14 | Batching | intermediate | Sending multiple requests together in one API call to reduce cost and latency |
| 15 | Caching | intermediate | Storing previous API responses so repeated identical requests don't cost money |
| 16 | Responses API | beginner | A modern API interface for creating model responses with text, images, tools, and stateful context |
| 17 | Chat Completions API | beginner | An API interface that sends a list of chat messages to a model and receives a response |
| 18 | Structured Outputs | intermediate | A feature that makes model outputs conform to a defined schema |
| 19 | JSON Mode | intermediate | A generation mode that asks the model to return valid JSON |
| 20 | JSON Schema | intermediate | A formal structure describing the required shape, fields, and types of JSON data |
| 21 | Tool Choice | intermediate | A setting that controls whether and how a model selects tools during a response |
| 22 | Prompt Caching | intermediate | Reusing repeated prompt prefixes to reduce latency and cost |
| 23 | Computer Use | advanced | A tool capability where an AI can operate a computer interface to complete tasks |
| 24 | Web Search Tool | intermediate | A hosted tool that lets a model search the web for current or external information |
| 25 | File Search | intermediate | A hosted retrieval tool that lets a model search uploaded files through a vector store |
| 26 | Vector Store | intermediate | A managed storage system for searchable embedded documents or chunks |
| 27 | Agents SDK | intermediate | A developer toolkit for building, running, and tracing agent workflows |
| 28 | Idempotency | advanced | A property where retrying the same request does not accidentally perform the same action twice |

---

## Category 11 — Agents (21 terms)

*"AI that doesn't just talk — it acts."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | AI Agent | beginner | An AI system that can independently perform tasks, make decisions, and use tools |
| 2 | Agent Loop | intermediate | The core cycle of an agent: observe → think → act → observe result |
| 3 | ReAct (Reasoning + Acting) | intermediate | A pattern where the agent alternates between reasoning about what to do and taking actions |
| 4 | Tool Use | intermediate | An agent's ability to call external functions or APIs to accomplish tasks |
| 5 | Function Calling | intermediate | An API feature that lets the model return structured data to trigger external tools |
| 6 | Memory (Agent) | intermediate | An agent's ability to remember past interactions and use them for future decisions |
| 7 | Short-term Memory | intermediate | The current conversation context the agent is working with |
| 8 | Long-term Memory | intermediate | Persistent storage of past interactions that persists across sessions |
| 9 | Multi-Agent System | advanced | A system where multiple agents work together, each with different roles and capabilities |
| 10 | Orchestrator | advanced | The "manager" agent that coordinates other agents and decides which one handles each task |
| 11 | Supervisor Agent | advanced | An agent that monitors other agents' outputs for quality and correctness |
| 12 | Sub-agent | intermediate | A specialised agent created by a parent agent to handle a specific sub-task |
| 13 | Planning | intermediate | An agent's ability to break a complex goal into a sequence of smaller steps |
| 14 | Execution | intermediate | The step where the agent actually performs the planned actions |
| 15 | Observation | intermediate | The feedback an agent receives after taking an action (tool result, error, success) |
| 16 | Human-in-the-Loop | intermediate | A pattern where an agent pauses and asks a human for approval before taking critical actions |
| 17 | Workflow | beginner | A repeatable sequence of steps an AI system follows to complete a task |
| 18 | Tool Choice | intermediate | The decision process or setting that determines which tool an agent should call |
| 19 | Delegation | intermediate | Assigning part of a task to another agent, tool, or specialized component |
| 20 | Agent Handoff | intermediate | Passing control or context from one agent to another during a workflow |
| 21 | Autonomous Agent | advanced | An agent that can pursue goals over multiple steps with limited human intervention |

---

## Category 12 — MCP Protocol (22 terms)

*"Model Context Protocol — the standard way AI agents connect to tools and data."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | MCP (Model Context Protocol) | beginner | An open standard that defines how AI applications connect to external tools and data sources |
| 2 | MCP Server | intermediate | A program that exposes tools, resources, and prompts for AI clients to use |
| 3 | MCP Client | intermediate | An AI application (like Claude Desktop, VS Code Copilot) that connects to MCP servers |
| 4 | MCP Host | intermediate | The environment where the AI model runs and manages connections to MCP servers |
| 5 | Tool (MCP) | intermediate | An executable action exposed by an MCP server that an AI can call (e.g., search, calculator) |
| 6 | Resource (MCP) | intermediate | Data exposed by an MCP server that an AI can read (e.g., files, database records, API responses) |
| 7 | Prompt (MCP) | intermediate | A reusable prompt template provided by an MCP server |
| 8 | Transport (MCP) | advanced | The communication layer — either stdio (local process) or SSE (remote server over HTTP) |
| 9 | stdio Transport | advanced | MCP transport where the client launches the server as a local process and communicates via stdin/stdout |
| 10 | SSE Transport (Server-Sent Events) | advanced | MCP transport where the server runs remotely and communicates over HTTP streaming |
| 11 | Roots (MCP) | advanced | A list of filesystem directories that the host provides to the server for access |
| 12 | MCP Discovery | intermediate | The process by which a client learns what tools, resources, and prompts a server offers |
| 13 | Tool Definition | intermediate | A JSON description of a tool including its name, description, and input schema |
| 14 | Resource Template | intermediate | A pattern for dynamically addressing resources (e.g., `file://{path}` or `db://{table}/{id}`) |
| 15 | JSON-RPC | intermediate | A lightweight remote procedure call format used as the message layer for MCP |
| 16 | Initialization (MCP) | intermediate | The startup handshake where MCP clients and servers exchange protocol versions and capabilities |
| 17 | Capability Negotiation | advanced | The process where MCP clients and servers declare which protocol features they support |
| 18 | Sampling (MCP) | advanced | An MCP feature that lets a server request model completions through the client |
| 19 | Elicitation (MCP) | advanced | An MCP feature that lets a server ask the user for additional structured information |
| 20 | Cancellation (MCP) | intermediate | A protocol notification used to stop an in-progress MCP request |
| 21 | Progress (MCP) | intermediate | A protocol mechanism for reporting progress on long-running MCP operations |
| 22 | Logging (MCP) | intermediate | Protocol messages that let MCP servers send diagnostic or status information to clients |

---

## Category 13 — Multimodal (16 terms)

*"AI that works with text, images, audio, and video together."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Multimodal AI | beginner | AI that can understand and generate multiple types of data — text, images, audio, video |
| 2 | Text-to-Image | beginner | Generating an image from a text description (e.g., "a cat wearing a hat") |
| 3 | Text-to-Speech (TTS) | beginner | Converting written text into spoken audio |
| 4 | Speech-to-Text (STT) | beginner | Converting spoken audio into written text |
| 5 | Image Recognition | beginner | Identifying objects, people, or scenes in an image |
| 6 | Object Detection | intermediate | Locating and labelling multiple objects within an image with bounding boxes |
| 7 | Image Segmentation | advanced | Dividing an image into regions pixel by pixel, labelling each pixel's object |
| 8 | Optical Character Recognition (OCR) | beginner | Extracting text from images or scanned documents |
| 9 | Stable Diffusion | intermediate | A popular open-source model for generating images from text descriptions |
| 10 | DALL-E | intermediate | OpenAI's text-to-image model family |
| 11 | CLIP | advanced | A model that learns the relationship between images and text, used for understanding both |
| 12 | Whisper | intermediate | OpenAI's open-source speech-to-text model |
| 13 | Vision Transformer (ViT) | advanced | A transformer architecture adapted for image understanding |
| 14 | Diffusion | intermediate | A process that starts with random noise and gradually removes it to create a coherent image |
| 15 | Image Captioning | intermediate | Automatically generating a text description of an image |
| 16 | Visual Question Answering | intermediate | Answering questions about the content of an image |

---

## Category 14 — Safety & Ethics (24 terms)

*"Building AI that is fair, safe, and trustworthy."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | AI Safety | intermediate | The field of research focused on ensuring AI systems behave as intended and avoid harm |
| 2 | AI Alignment | intermediate | The problem of ensuring AI systems pursue goals that are aligned with human values |
| 3 | Bias (in AI) | beginner | When an AI system produces systematically unfair outcomes due to biased training data |
| 4 | Fairness | intermediate | The principle that AI systems should treat all groups of people equitably |
| 5 | Transparency | intermediate | The degree to which an AI system's decisions can be understood and explained |
| 6 | Explainability (XAI) | intermediate | Techniques that help humans understand why an AI model made a specific decision |
| 7 | Interpretability | advanced | The ability to understand the internal workings of a model, not just its outputs |
| 8 | Guardrails | intermediate | Programmatic safeguards that prevent AI from generating harmful or inappropriate content |
| 9 | Red Teaming | intermediate | Deliberately testing an AI system by trying to make it fail or produce harmful outputs |
| 10 | Data Privacy | beginner | Protecting personal information used in training data or API interactions |
| 11 | Copyright (AI) | beginner | Legal questions around whether AI training on copyrighted data and AI-generated content infringe rights |
| 12 | Model Card | intermediate | A standardised document that describes a model's intended use, limitations, and evaluation results |
| 13 | Responsible AI | beginner | A framework for developing AI systems that are fair, transparent, accountable, and safe |
| 14 | Regulation | beginner | Government laws and policies that govern AI development and deployment |
| 15 | Constitutional AI | advanced | Training AI with a set of written principles that guide its behaviour, reducing reliance on direct human feedback by having the model critique its own outputs against those principles |
| 16 | Content Filtering | beginner | Automated systems that block harmful, hateful, or unsafe content from AI outputs |
| 17 | Open Source vs Closed Source | beginner | The debate between publicly available model weights that anyone can inspect and modify vs proprietary API-only models |
| 18 | PII (Personally Identifiable Information) | beginner | Information that can identify a specific person, such as an email address, phone number, or government ID |
| 19 | Data Retention | intermediate | How long user data, prompts, outputs, or logs are stored by a system or provider |
| 20 | Data Exfiltration | advanced | The unauthorized extraction of sensitive data from a system |
| 21 | Indirect Prompt Injection | advanced | A prompt injection attack hidden inside external content that an AI system reads or retrieves |
| 22 | Model Misuse | intermediate | Using an AI model for harmful, deceptive, abusive, or unauthorized purposes |
| 23 | Abuse Monitoring | intermediate | Systems and processes used to detect unsafe or policy-violating AI usage |
| 24 | Safety Classifier | intermediate | A model or rule-based system that detects unsafe, sensitive, or policy-relevant content |

---

## Category 15 — Frontier Concepts (17 terms)

*"What's next? The cutting edge and emerging ideas in AI."*

| # | Term | Difficulty | One-Line Definition |
|---|------|-----------|---------------------|
| 1 | Emergent Abilities | intermediate | Capabilities that appear in large models but are not present in smaller ones, without being explicitly programmed |
| 2 | Scaling Laws | intermediate | Research findings that model performance improves predictably with more data, larger models, and more compute |
| 3 | Chinchilla Law | advanced | A scaling law finding that data and model size should scale equally for optimal performance |
| 4 | Mixture of Experts (MoE) | advanced | An architecture where only part of the network activates for each input, making large models more efficient |
| 5 | Grokking | advanced | A phenomenon where a model suddenly generalises after prolonged training past the point of overfitting |
| 6 | World Model | advanced | An AI system that builds an internal model of how the world works to plan and reason |
| 7 | Reasoning | intermediate | The model's internal step-by-step thinking process before producing a final answer |
| 8 | Reasoning Model | intermediate | A model specifically designed to perform multi-step logical reasoning by spending additional compute on internal deliberation (e.g., o1, o3) |
| 9 | Test-Time Compute | advanced | Using additional computation at inference time (rather than training time) to improve outputs |
| 10 | In-Context Learning | intermediate | A model's ability to learn from examples provided in the prompt at inference time without updating its weights |
| 11 | Self-Play | advanced | A training technique where an AI system improves by playing against versions of itself |
| 12 | Synthetic Data | intermediate | Data generated by AI models rather than collected from the real world, used for training and evaluation |
| 13 | Context Engineering | intermediate | Designing the information, tools, memory, and instructions provided to a model so it can perform reliably |
| 14 | Test-Time Scaling | advanced | Improving model output by spending more compute during inference rather than changing training |
| 15 | Long-Context Model | intermediate | A model designed to process very large amounts of input in a single context window |
| 16 | Multimodal Reasoning | advanced | Reasoning across multiple data types such as text, images, audio, and video |
| 17 | AI Workflow Automation | intermediate | Using AI systems to automate multi-step business or software workflows |

---

## Quick Reference — Category Summary

| # | Category | Term Count |
|---|----------|-----------|
| 1 | AI Basics | 20 |
| 2 | Neural Networks | 22 |
| 3 | Transformers | 17 |
| 4 | Training & Data | 37 |
| 5 | LLMs | 18 |
| 6 | Prompting | 17 |
| 7 | Embeddings | 17 |
| 8 | RAG | 17 |
| 9 | Fine-tuning | 23 |
| 10 | APIs & Integration | 28 |
| 11 | Agents | 21 |
| 12 | MCP Protocol | 22 |
| 13 | Multimodal | 16 |
| 14 | Safety & Ethics | 24 |
| 15 | Frontier Concepts | 17 |
| | **Total** | **323** |

---

*End of TERMS_CATALOG.md — review and edit before migration to `terms.json`.*
