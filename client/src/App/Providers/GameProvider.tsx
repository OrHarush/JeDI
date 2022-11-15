import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { sides } from "../../enums";
import { ProviderProps } from "../../types";

type GameContextType = {
    playerSide: string;
    setPlayerSide: Dispatch<SetStateAction<string>>;
}

const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: ProviderProps) => {
    const [playerSide, setPlayerSide] = useState<string>(sides.white.name);


    return (
        <GameContext.Provider value={{ playerSide, setPlayerSide }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;

export const useGame = () => useContext(GameContext) as GameContextType;