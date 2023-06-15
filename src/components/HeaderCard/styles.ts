import { styled } from "styled-components";


export const Container = styled.div`
    margin-top: -10%;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;

   
    background-color: ${(props) => props.theme["base-profile"]};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    padding: 2rem;

    footer {
        display: flex;
        gap: 2.2rem;
        margin-top: 2rem;
    }
`

export const HeaderTitle = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};

`

export const CardDescription = styled.span`
    margin-top: 0.5rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

`

export const AvatarProfile = styled.div`
    min-width: 148px;
    min-height: 148px;
    border-radius: 8px;

    display: flex;
    img {
        object-fit: cover;
    }
`

export const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-family: "Nunito", sans-serif;

    gap: 0.5rem;

    color: ${(props) => props.theme["base-subtitle"]};
`