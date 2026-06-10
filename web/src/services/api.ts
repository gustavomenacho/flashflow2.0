const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error(
    "VITE_API_URL não está definido. Verifique o arquivo web/.env"
  );
}

interface FlashcardInput {
  question: string;
  answer: string;
  category: string;
}

async function handleResponse(res: Response) {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Erro na requisição da API");
  }

  return res.json().catch(() => null);
}

export const api = {
  async get(): Promise<unknown[]> {
    const res = await fetch(`${API_URL}/flashcards`);
    return handleResponse(res);
  },

  async create(data: FlashcardInput) {
    const res = await fetch(`${API_URL}/flashcards`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return handleResponse(res);
  },

  async update(id: string, data: FlashcardInput) {
    const res = await fetch(`${API_URL}/flashcards/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return handleResponse(res);
  },

  async delete(id: string) {
    const res = await fetch(`${API_URL}/flashcards/${id}`, {
      method: "DELETE",
    });

    return handleResponse(res);
  },
};