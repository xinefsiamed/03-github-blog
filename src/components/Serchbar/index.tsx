import { PublishedNumber, SearchbarTitleContainer, Searchbartitle, SerchbarContainer, TextInput } from "./styles";

interface ISearchbarProps{
    publishes: number
}

export function Searchbar({publishes}: ISearchbarProps) {
    return (
        <SerchbarContainer>
            <SearchbarTitleContainer>
                <Searchbartitle>Publicações</Searchbartitle>
                <PublishedNumber>{publishes} publicações</PublishedNumber>
            </SearchbarTitleContainer>

            <TextInput placeholder="Buscar conteúdo"/>
        </SerchbarContainer>
    )
}