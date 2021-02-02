import styled from 'styled-components';

export const Grid = styled.section`
  /* mobile view first */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  /* assign styles to screens above 768px */
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    > div:first-child {
      order: 2;
    }

    > div:last-child {
      order: 1;
    }
  }
`;

// style the variants select list
export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

// styles the price
export const Price = styled.div`
  margin: 40px 0;
  font-weight: bold;
  font-size: 30px;
`;