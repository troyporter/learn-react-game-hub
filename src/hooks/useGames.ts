import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform}[]
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
      apiClient
          .get<FetchGamesResponse>("/games", {'signal': controller.signal})
          .then((response) => {
            setGames(response.data.results)
          });
          // TODO .error()
  
      return () => {
        controller.abort();
      }
  }, []);

  return {games, error}
}

export default useGames
