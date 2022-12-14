import React, { FC, memo } from 'react';
import styled, { css } from 'styled-components';

import { ModalProps } from '../../types/interface';
import { SelectItems } from '../SelectItems';

const Container = styled(SelectItems)`
  ${() => css`
    position: fixed;
    background-color: #0010104d;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
  `}
`;

const CenterContent = styled.div`
  ${({ theme: { breakpoints } }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 31;
    width: 90%;

    ${breakpoints.md} {
      width: max-content;
    }
  `}
`;

export const Modal: FC<ModalProps> = memo(({ closeModal, modalIsOpen, children }) => {
  return (
    <>
      {modalIsOpen ? (
        <Container onClick={closeModal}>
          <CenterContent onClick={(e) => e.stopPropagation()}>{children}</CenterContent>
        </Container>
      ) : null}
    </>
  );
});
