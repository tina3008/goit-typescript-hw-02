import axios from "axios";



export const getImages = async (setSearchQuery: string, setPage: number): Promise<T>=>{
  try {
    const response = await axios.get<T>(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query: setSearchQuery,
          client_id: "s0XrVkvZCxZybVrgAUlDfLQ7GhmjR-Qp5eV1OTeQ98w",
          page: setPage,
          per_page: 12,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
