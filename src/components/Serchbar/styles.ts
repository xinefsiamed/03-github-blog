import { styled } from "styled-components";

export const SerchbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;

    margin-top: 7.5rem;
`

export const SearchbarTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const Searchbartitle = styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;

    color: ${(props) => props.theme["base-subtitle"]}
`

export const PublishedNumber = styled.span`
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    line-height: 160%;
`

export const TextInput = styled.input`
width: 100%;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.5rem;

    background: ${(props) => props.theme["base-input"]};

    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
`