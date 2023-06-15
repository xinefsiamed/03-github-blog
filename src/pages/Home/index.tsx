import { HeaderCard } from "../../components/HeaderCard";
import { Searchbar } from "../../components/Serchbar";
import { HomeContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <HeaderCard />

            <Searchbar publishes={4}/>
        </HomeContainer>
    )
}