import styled from 'styled-components';

export const RemainingCollections = styled.div`
    display: flex;    
    flex-wrap: wrap;

    // target all of the child div's rendered within the remaining collections
    > div {
        flex-grow: 1;
        min-width: 100%;

        @media (min-width: 768px) {
            min-width: 50%;
        }

        @media (min-width: 1024px) {
            min-width: 33%;
        }
    }
`;