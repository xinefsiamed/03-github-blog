import { AvatarProfile, CardDescription, Container, HeaderTitle, TagContainer } from "./styles";
import avatar from '../../assets/avatar.png'
import { Buildings, GithubLogo, Users } from "@phosphor-icons/react";

export function HeaderCard() {
    return (
        <Container>
            <AvatarProfile>
                <img src={avatar} />
            </AvatarProfile>
            <div>
                <HeaderTitle>Super Mario Bros.</HeaderTitle>
                <CardDescription>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat 
                    pulvinar vel mass.
                </CardDescription>

                <footer>
                    <TagContainer>
                        <GithubLogo size={18} weight="duotone" /> 
                        asadasdasd
                    </TagContainer>
                    <TagContainer>
                        <Buildings size={18} weight="duotone" />
                        Marios
                    </TagContainer>
                    <TagContainer>
                        <Users size={18} weight="duotone" />
                        12 seguimores
                    </TagContainer>
                </footer>
            </div>
        </Container>
    )
}