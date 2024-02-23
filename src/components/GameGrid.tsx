import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <SimpleGrid
            padding="10px"
            columns={{ sm: 1, md: 2, lg: 5 }}
            spacing={13}
        >
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;
